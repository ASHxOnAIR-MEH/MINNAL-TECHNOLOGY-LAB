import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

console.log('--- MINNAL INNOVATIONS: Logo & Asset Generator ---');

// 1. CRC32 implementation
function makeCrcTable() {
  let c;
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }
  return crcTable;
}

const crcTable = makeCrcTable();

function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crcTarget = buf.slice(4, 8 + len);
  buf.writeUInt32BE(crc32(crcTarget), 8 + len);
  return buf;
}

function encodePng(width, height, rgbaBuffer) {
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  
  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // bit depth 8
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // Scanlines with filter 0
  const scanlineLength = 1 + width * 4;
  const rawData = Buffer.alloc(height * scanlineLength);
  for (let y = 0; y < height; y++) {
    const rawOffset = y * scanlineLength;
    rawData[rawOffset] = 0; // Filter 0 (None)
    const srcOffset = y * width * 4;
    rgbaBuffer.copy(rawData, rawOffset + 1, srcOffset, srcOffset + width * 4);
  }

  const deflated = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', deflated);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// 2. Decode original logo.png
const srcPath = path.resolve('public/images/logo.png');
const fileBuf = fs.readFileSync(srcPath);

let pos = 8;
const idatChunks = [];
while (pos < fileBuf.length) {
  const len = fileBuf.readUInt32BE(pos);
  const type = fileBuf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idatChunks.push(fileBuf.slice(pos + 8, pos + 8 + len));
  pos += 12 + len;
}

const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const srcW = 1024, srcH = 1024;
const raw = Buffer.alloc(srcW * srcH * 4);
let srcOff = 0;

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

for (let y = 0; y < srcH; y++) {
  const filter = decompressed[srcOff++];
  for (let x = 0; x < srcW; x++) {
    const dstIdx = (y * srcW + x) * 4;
    let r = decompressed[srcOff++];
    let g = decompressed[srcOff++];
    let b = decompressed[srcOff++];
    let a = decompressed[srcOff++];
    
    if (filter === 1) { // Sub
      if (x > 0) {
        r = (r + raw[dstIdx - 4]) & 0xFF;
        g = (g + raw[dstIdx - 3]) & 0xFF;
        b = (b + raw[dstIdx - 2]) & 0xFF;
        a = (a + raw[dstIdx - 1]) & 0xFF;
      }
    } else if (filter === 2) { // Up
      if (y > 0) {
        const upIdx = ((y - 1) * srcW + x) * 4;
        r = (r + raw[upIdx]) & 0xFF;
        g = (g + raw[upIdx + 1]) & 0xFF;
        b = (b + raw[upIdx + 2]) & 0xFF;
        a = (a + raw[upIdx + 3]) & 0xFF;
      }
    } else if (filter === 3) { // Average
      const leftR = x > 0 ? raw[dstIdx - 4] : 0;
      const leftG = x > 0 ? raw[dstIdx - 3] : 0;
      const leftB = x > 0 ? raw[dstIdx - 2] : 0;
      const leftA = x > 0 ? raw[dstIdx - 1] : 0;
      const upIdx = ((y - 1) * srcW + x) * 4;
      const upR = y > 0 ? raw[upIdx] : 0;
      const upG = y > 0 ? raw[upIdx + 1] : 0;
      const upB = y > 0 ? raw[upIdx + 2] : 0;
      const upA = y > 0 ? raw[upIdx + 3] : 0;
      r = (r + Math.floor((leftR + upR) / 2)) & 0xFF;
      g = (g + Math.floor((leftG + upG) / 2)) & 0xFF;
      b = (b + Math.floor((leftB + upB) / 2)) & 0xFF;
      a = (a + Math.floor((leftA + upA) / 2)) & 0xFF;
    } else if (filter === 4) { // Paeth
      const aR = x > 0 ? raw[dstIdx - 4] : 0;
      const aG = x > 0 ? raw[dstIdx - 3] : 0;
      const aB = x > 0 ? raw[dstIdx - 2] : 0;
      const aA = x > 0 ? raw[dstIdx - 1] : 0;
      const upIdx = ((y - 1) * srcW + x) * 4;
      const bR = y > 0 ? raw[upIdx] : 0;
      const bG = y > 0 ? raw[upIdx + 1] : 0;
      const bB = y > 0 ? raw[upIdx + 2] : 0;
      const bA = y > 0 ? raw[upIdx + 3] : 0;
      const cIdx = ((y - 1) * srcW + (x - 1)) * 4;
      const cR = (y > 0 && x > 0) ? raw[cIdx] : 0;
      const cG = (y > 0 && x > 0) ? raw[cIdx + 1] : 0;
      const cB = (y > 0 && x > 0) ? raw[cIdx + 2] : 0;
      const cA = (y > 0 && x > 0) ? raw[cIdx + 3] : 0;
      r = (r + paeth(aR, bR, cR)) & 0xFF;
      g = (g + paeth(aG, bG, cG)) & 0xFF;
      b = (b + paeth(aB, bB, cB)) & 0xFF;
      a = (a + paeth(aA, bA, cA)) & 0xFF;
    }
    raw[dstIdx] = r;
    raw[dstIdx + 1] = g;
    raw[dstIdx + 2] = b;
    raw[dstIdx + 3] = a;
  }
}

// 3. Crop Emblem (M + Lightning Bolt)
// Emblem bounds are approx X: 76 -> 959 (width 883), Y: 119 -> 685 (height 566)
// Let's create a centered square box around the emblem:
// Center of emblem is X = 517, Y = 402
// Square of size 640x640:
// startX = 517 - 320 = 197, startY = 402 - 320 = 82
// Actually, full emblem width is 884 (from 76 to 959).
// So square size should be 920x920 centered around X = 517, Y = 402:
// startX = 517 - 460 = 57, startY = 402 - 460 = -58 (clamp to 0, startY = 20)
const cropSize = 920;
const startX = 52;
const startY = 20;

const emblemBuf = Buffer.alloc(cropSize * cropSize * 4);
for (let y = 0; y < cropSize; y++) {
  const srcY = startY + y;
  for (let x = 0; x < cropSize; x++) {
    const srcX = startX + x;
    const dstIdx = (y * cropSize + x) * 4;
    if (srcX >= 0 && srcX < srcW && srcY >= 0 && srcY < 695) { // don't include text below Y=695
      const sIdx = (srcY * srcW + srcX) * 4;
      emblemBuf[dstIdx] = raw[sIdx];
      emblemBuf[dstIdx + 1] = raw[sIdx + 1];
      emblemBuf[dstIdx + 2] = raw[sIdx + 2];
      emblemBuf[dstIdx + 3] = raw[sIdx + 3];
    } else {
      emblemBuf[dstIdx + 3] = 0; // transparent
    }
  }
}

const emblemPng = encodePng(cropSize, cropSize, emblemBuf);
fs.writeFileSync('public/images/logo-emblem.png', emblemPng);
fs.writeFileSync('public/favicon.png', emblemPng);
console.log('✓ Written public/images/logo-emblem.png and public/favicon.png');

// 4. Generate SVG Emblem for Favicon & Scalable Display
// The emblem has:
// Dark navy wings of "M" and central golden-orange lightning bolt
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <!-- Lightning Bolt Vibrant Gradient -->
    <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFDD00"/>
      <stop offset="45%" stop-color="#FFAC00"/>
      <stop offset="100%" stop-color="#FF7A00"/>
    </linearGradient>
    <!-- Navy Wing Gradient -->
    <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E2458"/>
      <stop offset="100%" stop-color="#061234"/>
    </linearGradient>
    <!-- Subtle Glow for Lightning -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Left 'M' Wing -->
  <path d="M72 76 H178 V332 L236 242 L160 148 L238 76 L72 76 Z" fill="url(#wingGrad)" />
  <path d="M72 76 L72 436 L178 332 V180 L256 76 Z" fill="#07143D" />

  <!-- Right 'M' Wing -->
  <path d="M440 76 H334 V332 L276 242 L352 148 L274 76 L440 76 Z" fill="url(#wingGrad)" />
  <path d="M440 76 L440 436 L334 332 V180 L256 76 Z" fill="#07143D" />

  <!-- Embedded High-Resolution Logo Vector / Raster fallback -->
  <image href="/images/logo-emblem.png" x="16" y="16" width="480" height="480" />
</svg>
`;

fs.writeFileSync('public/lightning-icon.svg', svgContent);
fs.writeFileSync('public/images/logo.svg', svgContent);
console.log('✓ Written public/lightning-icon.svg and public/images/logo.svg');
