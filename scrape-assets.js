const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function downloadFile(url, dest) {
  if (!url || !url.startsWith('http')) return null;
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function scrapePage(urlPath) {
  const url = `https://www.wpiny.com${urlPath}`;
  console.log(`Fetching ${url}...`);
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', async () => {
        // Extract images and videos using regex
        const imgRegex = /<img[^>]+src="([^">]+)"/gi;
        const videoRegex = /<source[^>]+src="([^">]+)"/gi;
        const bgRegex = /background-image:\s*url\((['"]?)([^'">)]+)\1\)/gi;
        const dataSrcRegex = /data-src="([^">]+)"/gi;
        
        let match;
        const assets = new Set();
        
        while ((match = imgRegex.exec(data)) !== null) { assets.add(match[1]); }
        while ((match = videoRegex.exec(data)) !== null) { assets.add(match[1]); }
        while ((match = bgRegex.exec(data)) !== null) { assets.add(match[2]); }
        while ((match = dataSrcRegex.exec(data)) !== null) { assets.add(match[1]); }
        
        console.log(`Found ${assets.size} assets on ${urlPath}`);
        
        for (const assetUrl of assets) {
          try {
            // handle relative URLs
            const fullUrl = assetUrl.startsWith('http') ? assetUrl : (assetUrl.startsWith('/') ? `https://www.wpiny.com${assetUrl}` : `https://www.wpiny.com/${assetUrl}`);
            
            const filename = path.basename(fullUrl).split('?')[0];
            const isVideo = filename.endsWith('.mp4') || filename.endsWith('.webm');
            const destFolder = isVideo ? 'media' : 'images';
            const destPath = path.join(__dirname, 'public', destFolder, filename);
            
            if (!fs.existsSync(destPath)) {
              console.log(`Downloading ${filename}...`);
              await downloadFile(fullUrl, destPath);
            }
          } catch (e) {
            console.log(`Error downloading ${assetUrl}: ${e.message}`);
          }
        }
        
        // Save the raw HTML so we can extract text from it later
        const htmlFile = urlPath === '/' ? 'home' : urlPath.replace(/\//g, '');
        fs.writeFileSync(path.join(__dirname, `temp_${htmlFile}.html`), data);
        console.log(`Saved HTML for ${urlPath}`);
        
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const pages = [
    '/about/',
    '/divisions/',
    '/brands-and-licenses/',
    '/retailers/',
    '/contact-us/'
  ];
  
  if (!fs.existsSync(path.join(__dirname, 'public', 'images'))) {
    fs.mkdirSync(path.join(__dirname, 'public', 'images'), { recursive: true });
  }
  
  for (const page of pages) {
    await scrapePage(page);
  }
  
  console.log('Done downloading assets!');
}

run();
