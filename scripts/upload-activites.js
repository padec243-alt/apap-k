const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dessrncgo',
  api_key: '412152166184433',
  api_secret: 'R1LebjMAR2hqfbP5SITaIZpA43s'
});

const activitesDir = path.join(__dirname, '../public/activites');

function getAllImages(dir, baseDir = '') {
  let images = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(baseDir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      images = images.concat(getAllImages(fullPath, relativePath));
    } else if (/\.(jpg|jpeg|png|gif|jfif|jpe)$/i.test(item)) {
      images.push({ fullPath, relativePath });
    }
  }
  
  return images;
}

async function uploadAll() {
  const images = getAllImages(activitesDir);
  console.log(`Found ${images.length} images to upload\n`);
  
  const results = [];
  
  for (let i = 0; i < images.length; i++) {
    const { fullPath, relativePath } = images[i];
    const publicId = relativePath.replace(/\.[^.]+$/, '').replace(/\s+/g, '_');
    
    console.log(`[${i + 1}/${images.length}] Uploading ${relativePath}...`);
    
    try {
      const result = await cloudinary.uploader.upload(fullPath, {
        folder: 'apap-k/activites',
        public_id: publicId,
        overwrite: true,
        transformation: [
          { width: 1920, height: 1080, crop: 'limit', quality: 'auto:good' }
        ]
      });
      
      results.push({
        local: `/activites/${relativePath}`,
        cloudinary: result.secure_url
      });
      
      console.log(`✓ Done`);
    } catch (err) {
      console.error(`✗ Error: ${err.message}`);
    }
  }
  
  // Save mapping
  fs.writeFileSync(
    path.join(__dirname, 'activites-urls.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log(`\n✓ Uploaded ${results.length} images`);
  console.log('Saved to scripts/activites-urls.json');
}

uploadAll();
