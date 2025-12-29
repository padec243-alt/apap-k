const fs = require('fs');
const path = require('path');

// Load the mapping
const mapping = JSON.parse(fs.readFileSync(path.join(__dirname, 'activites-urls.json'), 'utf8'));

// Create a lookup object
const urlMap = {};
mapping.forEach(item => {
  urlMap[item.local] = item.cloudinary;
});

// Files to update
const filesToUpdate = [
  '../app/page.tsx',
  '../app/projets/page.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let replacements = 0;
  
  Object.keys(urlMap).forEach(local => {
    // Handle different case variations
    const variations = [
      local,
      local.replace('.JPG', '.jpg'),
      local.replace('.jpg', '.JPG')
    ];
    
    variations.forEach(variant => {
      if (content.includes(variant)) {
        content = content.split(variant).join(urlMap[local]);
        replacements++;
      }
    });
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}: ${replacements} replacements`);
});

console.log('\nDone!');
