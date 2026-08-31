const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');

const navMatch = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/i);
if (navMatch) {
  const links = [...navMatch[1].matchAll(/<a[^>]*>(.*?)<\/a>/gi)];
  console.log("Nav links:");
  links.forEach(l => console.log(l[1].replace(/<[^>]*>?/gm, '').trim()));
}

const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i);
console.log("Header length:", headerMatch ? headerMatch[1].length : 0);

const footerMatch = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
console.log("Footer length:", footerMatch ? footerMatch[1].length : 0);
