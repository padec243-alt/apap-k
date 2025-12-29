const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dessrncgo',
  api_key: '412152166184433',
  api_secret: 'R1LebjMAR2hqfbP5SITaIZpA43s'
});

const baniereDir = path.join(__dirname, '../public/baniere');

const files = fs.readdirSync(baniereDir).filter(f => 
  f.endsWith('.JPG') || f.endsWith('.jpg')
);

async function uploadAll() {
  const urls = [];
  
  for (const file of files) {
    const filePath = path.join(baniereDir, file);
    console.log(`Uploading ${file}...`);
    
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'apap-k/baniere',
        public_id: path.parse(file).name,
        overwrite: true,
        transformation: [
          { width: 1920, height: 1080, crop: 'limit', quality: 'auto:good' }
        ]
      });
      
      urls.push({
        file: file,
        url: result.secure_url
      });
      
      console.log(`✓ ${file} -> ${result.secure_url}`);
    } catch (err) {
      console.error(`✗ Error uploading ${file}:`, err.message);
    }
  }
  
  console.log('\n--- URLS ---');
  urls.forEach(u => console.log(`'${u.url}',`));
  
  // Save to JSON
  fs.writeFileSync(
    path.join(__dirname, 'baniere-urls.json'),
    JSON.stringify(urls, null, 2)
  );
  console.log('\nSaved to scripts/baniere-urls.json');
}

uploadAll();
