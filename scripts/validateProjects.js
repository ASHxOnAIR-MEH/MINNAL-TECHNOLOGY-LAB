import fs from 'fs';
import path from 'path';

console.log('--- MINNAL INNOVATIONS: Project Catalogue Validator ---');

const projectsPath = path.resolve('src/data/projects.json');
const categoriesPath = path.resolve('src/data/projectCategories.json');
const promptsPath = path.resolve('src/data/imagePrompts.json');

// 1. Check file existence
if (!fs.existsSync(projectsPath)) {
  console.error('ERROR: src/data/projects.json not found!');
  process.exit(1);
}

// 2. Validate JSON parse
let projects, categories, prompts;
try {
  projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
  console.log('✓ Valid JSON in src/data/projects.json (' + projects.length + ' projects)');
} catch (e) {
  console.error('ERROR: Failed to parse src/data/projects.json:', e.message);
  process.exit(1);
}

try {
  categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
  console.log('✓ Valid JSON in src/data/projectCategories.json (' + categories.length + ' categories)');
} catch (e) {
  console.error('ERROR: Failed to parse src/data/projectCategories.json:', e.message);
  process.exit(1);
}

try {
  prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf8'));
  console.log('✓ Valid JSON in src/data/imagePrompts.json (' + prompts.length + ' prompts)');
} catch (e) {
  console.error('ERROR: Failed to parse src/data/imagePrompts.json:', e.message);
  process.exit(1);
}

// 3. Check required fields and unique IDs
const idSet = new Set();
const slugSet = new Set();
const groupCounts = {};
const categoryCounts = {};
let customImageCount = 0;
let fallbackImageCount = 0;
let missingImageFiles = [];

const REQUIRED_FIELDS = [
  'id',
  'originalTitle',
  'title',
  'catalogGroup',
  'category',
  'slug',
  'image',
  'imageAlt',
  'imagePrompt'
];

projects.forEach((p, idx) => {
  // Required fields check
  for (const field of REQUIRED_FIELDS) {
    if (!p[field]) {
      console.error(`ERROR: Project at index ${idx} missing required field '${field}'`);
      process.exit(1);
    }
  }

  // Duplicate ID check
  if (idSet.has(p.id)) {
    console.error(`ERROR: Duplicate project id '${p.id}' found!`);
    process.exit(1);
  }
  idSet.add(p.id);

  // Duplicate slug check
  if (slugSet.has(p.slug)) {
    console.error(`ERROR: Duplicate project slug '${p.slug}' found!`);
    process.exit(1);
  }
  slugSet.add(p.slug);

  // Catalog group counts
  groupCounts[p.catalogGroup] = (groupCounts[p.catalogGroup] || 0) + 1;
  categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;

  // Image verification
  const localImgPath = path.resolve('public', p.image.replace(/^\//, ''));
  if (fs.existsSync(localImgPath)) {
    if (p.hasCustomImage) customImageCount++;
    else fallbackImageCount++;
  } else {
    missingImageFiles.push({ id: p.id, path: p.image });
  }
});

console.log('\n--- Breakdown by Catalogue Group ---');
Object.keys(groupCounts).sort().forEach(g => {
  console.log(`  Group ${g.padEnd(5)}: ${groupCounts[g]} projects`);
});

console.log('\n--- Breakdown by Category ---');
Object.keys(categoryCounts).sort().forEach(c => {
  console.log(`  ${c.padEnd(35)}: ${categoryCounts[c]} projects`);
});

console.log('\n--- Image Generation Status ---');
console.log(`  Custom Generated Images Active: ${customImageCount}`);
console.log(`  Verified Category Fallbacks   : ${fallbackImageCount}`);
console.log(`  Missing Image Assets          : ${missingImageFiles.length}`);

if (missingImageFiles.length > 0) {
  console.warn('WARNING: Missing image assets on disk:', missingImageFiles);
}

console.log('\n✓ ALL VALIDATION CHECKS PASSED SUCCESSFULLY!\n');
