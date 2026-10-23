import fs from 'fs';
import path from 'path';

console.log('--- MINNAL TECHNOLOGY LAB: Full 1,334 Project Catalogue Builder ---');

const part1Path = path.resolve('scripts/raw_part1.txt');
const part2Path = path.resolve('scripts/raw_part2.txt');
const part3Path = path.resolve('scripts/raw_part3.txt');

const projectsOutPath = path.resolve('src/data/projects.json');
const promptsOutPath = path.resolve('src/data/imagePrompts.json');
const categoriesOutPath = path.resolve('src/data/projectCategories.json');

const parts = [part1Path, part2Path, part3Path];

let currentCategory = '';
let currentGroup = '';

const groupCategoryMap = {
  'CWEB': 'Web & Software Projects',
  'PHP': 'PHP / Web Application Projects',
  'IOT': 'Internet of Things (IoT) Projects',
  'MC': 'Microcontroller & Electronics Projects',
  'ME': 'Mechanical Engineering Projects',
  'MI': 'Mechanical & Industrial Innovation Projects',
  'MH': 'Mechanical Mechanism Projects',
  'MR': 'Robotics & Automation Projects'
};

const categoryFallbackMap = {
  'Web & Software Projects': '/images/cat_software.jpg',
  'PHP / Web Application Projects': '/images/cat_software.jpg',
  'Internet of Things (IoT) Projects': '/images/cat_iot.jpg',
  'Microcontroller & Electronics Projects': '/images/cat_elec.jpg',
  'Mechanical Engineering Projects': '/images/cat_mech.jpg',
  'Mechanical & Industrial Innovation Projects': '/images/cat_mech.jpg',
  'Mechanical Mechanism Projects': '/images/cat_mech.jpg',
  'Robotics & Automation Projects': '/images/cat_robotics.jpg'
};

const customGeneratedImages = new Set([
  'MH001',
  'MR019'
]);

function cleanTitle(raw) {
  let t = raw.trim();
  // fix known typos in raw lists
  t = t.replace(/^-\s*/, '');
  t = t.replace(/\s+/g, ' ');
  t = t.replace(/Sytem/gi, 'System');
  t = t.replace(/Empoyee/gi, 'Employee');
  t = t.replace(/Shoping/gi, 'Shopping');
  t = t.replace(/hart patient/gi, 'heart patient');
  t = t.replace(/Dcotor/gi, 'Doctor');
  t = t.replace(/Mangement/gi, 'Management');
  t = t.replace(/Reseration/gi, 'Reservation');
  t = t.replace(/Hander/gi, 'Handler');
  t = t.replace(/Doner/gi, 'Donor');
  t = t.replace(/Noties/gi, 'Notices');
  t = t.replace(/CURD/g, 'CRUD');
  t = t.replace(/wending/gi, 'vending');
  t = t.replace(/Aero plane/gi, 'Aeroplane');
  t = t.replace(/Cell phone/gi, 'Cell Phone');
  t = t.replace(/Four wheeler/gi, 'Four Wheeler');
  t = t.replace(/Two wheeler/gi, 'Two Wheeler');
  t = t.replace(/width worth/gi, 'Whitworth');
  t = t.replace(/width work/gi, 'Whitworth');
  t = t.replace(/VINCI/g, 'Da Vinci');
  t = t.replace(/Vinci/g, 'Da Vinci');
  t = t.replace(/Index Management System\(Truecaller/gi, 'Index Management System (Truecaller Directory)');
  t = t.replace(/Areca nut tree climbing and cutting Robot\s+this is the full project list.*/i, 'Areca nut tree climbing and cutting Robot');
  return t;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);
}

function generateAbstract(id, title, group, category) {
  switch (group) {
    case 'CWEB':
      return `Full-stack web software system designed for ${title.toLowerCase()}, providing secure data management, authenticated role access, and responsive interface workflows.`;
    case 'PHP':
      return `Database-driven PHP application for ${title.toLowerCase()}, featuring relational MySQL data models, administrative dashboards, and automated record transactions.`;
    case 'IOT':
      return `Connected Internet of Things prototype for ${title.toLowerCase()}, incorporating smart edge sensors, cloud telemetry integration, and automated alert triggers.`;
    case 'MC':
      return `Microcontroller-based embedded hardware control apparatus designed for ${title.toLowerCase()}, featuring closed-loop sensor feedback and actuator automation.`;
    case 'ME':
      return `Fabricated mechanical engineering apparatus demonstrating kinematic motion, structural rigidity, and automated work cycles for ${title.toLowerCase()}.`;
    case 'MI':
      return `Industrial innovation and mechanism prototype designed for ${title.toLowerCase()}, optimizing shopfloor productivity, lifting, or continuous material processing.`;
    case 'MH':
      return `Precision mechanical mechanism demonstrator for ${title.toLowerCase()}, converting driving inputs into synchronized output trajectories through dedicated linkages.`;
    case 'MR':
      return `Autonomous or remote-controlled mechatronic robotics platform engineered for ${title.toLowerCase()}, featuring multi-axis motion and sensory navigation.`;
    default:
      return `Engineering project prototype implementation for ${title}.`;
  }
}

function generateImagePrompt(id, title, group, category) {
  switch (group) {
    case 'CWEB':
    case 'PHP':
      return `Create a clean, modern UI/UX application interface mockup for a ${title}. High-resolution web dashboard screen displaying clean analytics cards, responsive navigation sidebar, subtle data visualization charts, modern typography, glassmorphism containers, isolated viewport preview, no physical machinery, no text watermark.`;
    case 'IOT':
      return `Create a realistic engineering prototype photograph of an IoT ${title}. Show the microcontroller development board, connected sensor probes, compact industrial acrylic and 3D-printed enclosure, clean wiring, and status OLED indicator on an electronics engineering workbench, soft technical lighting, no text, no watermark.`;
    case 'MC':
      return `Create a realistic engineering prototype photograph of an electronic ${title}. Show the custom PCB circuit board, microcontroller chip, relay switching stages, wiring harness, terminal blocks, status indicators, and benchtop test equipment in an electronics workshop, crisp lighting, no text, no watermark.`;
    case 'ME':
    case 'MI':
    case 'MH':
      return `Create a realistic engineering prototype concept render of a ${title}. Show the fabricated steel and aluminum mechanism, motor drive, linkages, structural frame, and precision machining details in a modern technical machine shop, premium technical lighting, no text, no watermark.`;
    case 'MR':
      return `Create a realistic engineering prototype concept render of a robotic ${title}. Show the articulated robotic frame, actuators, sensors, drive wheels or joints, wiring channels, and electronic controller enclosure in a high-tech engineering robotics lab, crisp studio lighting, no text, no watermark.`;
    default:
      return `Engineering concept prototype render of ${title}, professional laboratory background, no text, no watermark.`;
  }
}

function generateTags(group, title) {
  const baseTags = {
    'CWEB': ['Web Development', 'Software Engineering', 'Full Stack', 'Cloud Database'],
    'PHP': ['PHP', 'MySQL', 'Web Application', 'CRUD System'],
    'IOT': ['IoT', 'Sensors', 'ESP32/RPi', 'Cloud Telemetry'],
    'MC': ['Embedded Systems', 'Microcontroller', 'Circuit Design', 'Automation'],
    'ME': ['Mechanical Engineering', 'Machining', 'Fabrication', 'Machine Design'],
    'MI': ['Industrial Innovation', 'Mechanisms', 'Productivity', 'Mechanical Rig'],
    'MH': ['Mechanism', 'Kinematics', 'Linkages', 'Motion Control'],
    'MR': ['Robotics', 'Mechatronics', 'Autonomous Systems', 'Actuators']
  }[group] || ['Engineering'];

  // Add specific keyword tags if present in title
  const tLower = title.toLowerCase();
  const dynamic = [];
  if (tLower.includes('solar')) dynamic.push('Solar Powered');
  if (tLower.includes('pneumatic')) dynamic.push('Pneumatic');
  if (tLower.includes('hydraulic')) dynamic.push('Hydraulics');
  if (tLower.includes('geneva')) dynamic.push('Geneva Drive');
  if (tLower.includes('rfid')) dynamic.push('RFID');
  if (tLower.includes('bluetooth')) dynamic.push('Bluetooth');
  if (tLower.includes('gsm')) dynamic.push('GSM');
  if (tLower.includes('pedal')) dynamic.push('Human Powered');
  if (tLower.includes('agriculture') || tLower.includes('crop') || tLower.includes('seed')) dynamic.push('Smart Agriculture');
  if (tLower.includes('water')) dynamic.push('Fluid Systems');

  return Array.from(new Set([...baseTags.slice(0, 3), ...dynamic])).slice(0, 5);
}

const allProjects = [];
const allPrompts = [];
const seenIds = new Set();

for (const pFile of parts) {
  const content = fs.readFileSync(pFile, 'utf8');
  const lines = content.split('\n');

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.startsWith('[') && line.endsWith(']')) {
      const header = line.slice(1, -1);
      for (const [grp, cat] of Object.entries(groupCategoryMap)) {
        if (header.toLowerCase().includes(grp.toLowerCase()) || header.toLowerCase().includes(cat.toLowerCase())) {
          currentGroup = grp;
          currentCategory = cat;
          break;
        }
      }
      continue;
    }

    if (!line.includes('—')) continue;

    const parts = line.split('—');
    const rawId = parts[0].trim().replace(/^-\s*/, '');
    const rawTitle = parts.slice(1).join('—').trim();

    // Determine group from ID prefix if header didn't catch
    let group = currentGroup;
    if (rawId.startsWith('CWEB')) group = 'CWEB';
    else if (rawId.startsWith('PHP')) group = 'PHP';
    else if (rawId.startsWith('IOT')) group = 'IOT';
    else if (rawId.startsWith('MC')) group = 'MC';
    else if (rawId.startsWith('ME')) group = 'ME';
    else if (rawId.startsWith('MI')) group = 'MI';
    else if (rawId.startsWith('MH')) group = 'MH';
    else if (rawId.startsWith('MR')) group = 'MR';

    const category = groupCategoryMap[group] || currentCategory || 'Mechanical Engineering Projects';
    const cleanedTitle = cleanTitle(rawTitle);
    const slug = `${rawId.toLowerCase()}-${slugify(cleanedTitle)}`;

    if (seenIds.has(rawId)) {
      console.warn(`Duplicate ID detected: ${rawId}, skipping duplicate.`);
      continue;
    }
    seenIds.add(rawId);

    const hasCustomImage = customGeneratedImages.has(rawId);
    const customImagePath = `/images/projects/${rawId.toLowerCase()}.webp`;
    const fallbackImage = categoryFallbackMap[category] || '/images/cat_mech.jpg';
    const activeImage = hasCustomImage ? customImagePath : fallbackImage;
    const imageAlt = `${cleanedTitle} - Engineering prototype concept for MINNAL TECHNOLOGY LAB`;
    const imagePrompt = generateImagePrompt(rawId, cleanedTitle, group, category);
    const shortDesc = generateAbstract(rawId, cleanedTitle, group, category);
    const tags = generateTags(group, cleanedTitle);

    const isSoftware = group === 'CWEB' || group === 'PHP';

    const projectRecord = {
      id: rawId,
      originalTitle: rawTitle,
      title: cleanedTitle,
      catalogGroup: group,
      category: category,
      slug: slug,
      image: activeImage,
      hasCustomImage: hasCustomImage,
      fallbackImage: fallbackImage,
      imageAlt: imageAlt,
      imagePrompt: imagePrompt,
      shortDescription: shortDesc,
      fullOverview: `An engineering development project for ${cleanedTitle}, offering practical demonstration of ${category.toLowerCase()} principles, university-standard technical specifications, and reproducible fabrication/coding frameworks.`,
      complexity: isSoftware ? 'Full-Stack Web App' : (group === 'MR' || group === 'ME' ? 'Final Year B.Tech (S7-S8)' : 'Mini Project (S3-S5)'),
      tags: tags,
      hardwareComponents: isSoftware ? undefined : [
        'Custom Welded/Machined Mounting Frame',
        'Electric Drive Actuator / Motor Unit',
        'Electronic Control & Sensing Board',
        'Dedicated Power Supply & Harness',
        'Hardware Safety Enclosure'
      ],
      softwareStack: isSoftware ? [
        group === 'PHP' ? 'PHP 8.x & MySQL Database' : 'React, TypeScript & Node.js',
        'HTML5 Semantic Markup & CSS3 Styling',
        'RESTful API Endpoints & Auth Controller'
      ] : [
        'SolidWorks 3D CAD Modeling',
        'Embedded C/C++ or Kinematic Simulation'
      ],
      deliverables: [
        isSoftware ? 'Complete Tested Source Codebase & Database Export (.SQL)' : 'Fully Fabricated Working Scale/Benchtop Hardware Rig',
        isSoftware ? 'Full Architecture Blueprints & API Documentation' : 'Complete 2D/3D Production CAD Blueprints & Wiring Diagrams',
        'University-Format Engineering Project Report (KTU Guidelines)',
        'Viva Voce Defense Cheat Sheet & Demonstration Guide'
      ],
      keyFeatures: [
        'Reproducible engineering design verified against undergraduate project curriculum',
        'Modular architecture facilitating student customization and extended research',
        'Complete academic report documentation prepared to KTU university standards'
      ],
      estimatedTimeline: isSoftware ? '1 to 2 Weeks' : '2 to 3 Weeks'
    };

    allProjects.push(projectRecord);

    allPrompts.push({
      id: rawId,
      title: cleanedTitle,
      catalogGroup: group,
      category: category,
      imagePrompt: imagePrompt,
      status: hasCustomImage ? 'generated' : 'pending',
      imagePath: activeImage,
      fallbackImage: fallbackImage
    });
  }
}

console.log(`Total projects successfully parsed: ${allProjects.length}`);

// Write projects.json
fs.writeFileSync(projectsOutPath, JSON.stringify(allProjects, null, 2), 'utf8');
console.log(`✓ Written ${projectsOutPath} (${allProjects.length} projects)`);

// Write imagePrompts.json
fs.writeFileSync(promptsOutPath, JSON.stringify(allPrompts, null, 2), 'utf8');
console.log(`✓ Written ${promptsOutPath} (${allPrompts.length} prompts)`);

// Update projectCategories.json to represent all 8 groups cleanly
const categoriesJson = [
  {
    id: "Web & Software Projects",
    slug: "web-and-software-projects",
    title: "Web & Software Development",
    shortTitle: "Web & Software",
    catalogGroups: ["CWEB"],
    badge: "Full-Stack Platforms",
    description: "Database authentication systems, administrative management portals, educational software, and cloud applications.",
    icon: "Code",
    image: "/images/cat_software.jpg"
  },
  {
    id: "PHP / Web Application Projects",
    slug: "php-web-applications",
    title: "PHP & Web Applications",
    shortTitle: "PHP & Database",
    catalogGroups: ["PHP"],
    badge: "Enterprise CRUD Solutions",
    description: "Robust PHP MySQL portal systems, online booking engines, enterprise resource trackers, and institutional management applications.",
    icon: "Layers",
    image: "/images/cat_software.jpg"
  },
  {
    id: "Internet of Things (IoT) Projects",
    slug: "internet-of-things",
    title: "Internet of Things (IoT)",
    shortTitle: "IoT Systems",
    catalogGroups: ["IOT"],
    badge: "Reigniting Connected Systems",
    description: "Smart microcontrollers, ESP32 wearables, environmental sensor networks, edge agricultural nodes, and cloud telemetry.",
    icon: "Wifi",
    image: "/images/cat_iot.jpg"
  },
  {
    id: "Microcontroller & Electronics Projects",
    slug: "microcontroller-and-electronics",
    title: "Microcontroller & Electronics",
    shortTitle: "Microcontrollers",
    catalogGroups: ["MC"],
    badge: "Power & Circuit Architecture",
    description: "Motor speed controllers, sensor-based safety triggers, analog-to-digital signal processing, and embedded automation rigs.",
    icon: "Zap",
    image: "/images/cat_elec.jpg"
  },
  {
    id: "Mechanical Engineering Projects",
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    shortTitle: "Mechanical",
    catalogGroups: ["ME"],
    badge: "Precision In Motion",
    description: "Special-purpose machinery, material testing rigs, CNC prototypes, waste recycling shredders, and multi-operational machine tools.",
    icon: "Wrench",
    image: "/images/cat_mech.jpg"
  },
  {
    id: "Mechanical & Industrial Innovation Projects",
    slug: "mechanical-industrial-innovation",
    title: "Mechanical & Industrial Innovation",
    shortTitle: "Industrial Innovation",
    catalogGroups: ["MI"],
    badge: "Shopfloor & Productivity",
    description: "Hydraulic jacks, fluid power braking systems, pneumatic grinding tools, agricultural sprayers, and shopfloor automation.",
    icon: "Wrench",
    image: "/images/cat_mech.jpg"
  },
  {
    id: "Mechanical Mechanism Projects",
    slug: "mechanical-mechanisms",
    title: "Mechanical Mechanisms",
    shortTitle: "Mechanisms",
    catalogGroups: ["MH"],
    badge: "Kinematic Linkages",
    description: "Scotch yoke linkages, Geneva indexing mechanisms, Whitworth quick-return motions, and bevel-gear transmissions.",
    icon: "Wrench",
    image: "/images/cat_mech.jpg"
  },
  {
    id: "Robotics & Automation Projects",
    slug: "robotics-and-automation",
    title: "Robotics & Automation",
    shortTitle: "Robotics",
    catalogGroups: ["MR"],
    badge: "Bridging Autonomous Action",
    description: "Autonomous rovers, stair-climbing wheelchairs, multi-axis robotic arms, mobile firefighting AGVs, and hexapod walkers.",
    icon: "Cpu",
    image: "/images/cat_robotics.jpg"
  }
];

fs.writeFileSync(categoriesOutPath, JSON.stringify(categoriesJson, null, 2), 'utf8');
console.log(`✓ Written ${categoriesOutPath} (${categoriesJson.length} categories)`);
