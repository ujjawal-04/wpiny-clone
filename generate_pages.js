const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'About', path: 'about', desc: 'Learn more about Wiesner Products, our history, and our mission to deliver top-tier private label manufacturing.' },
  { name: 'Divisions', path: 'divisions', desc: 'Explore our specialized divisions encompassing footwear, apparel, and accessories across men\'s, women\'s, and children\'s categories.' },
  { name: 'Brands & Licenses', path: 'brands', desc: 'Discover the premier brands and prestigious licenses we collaborate with to produce exceptional merchandise.' },
  { name: 'Retailers', path: 'retailers', desc: 'Information for our retail partners. See how we can help stock your shelves with high-demand products.' },
  { name: 'Contact Us', path: 'contact', desc: 'Get in touch with our team for inquiries, partnerships, or support. We look forward to hearing from you.' }
];

pages.forEach(p => {
  const content = `
export default function ${p.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="page-container">
      <h2 className="page-title">${p.name}</h2>
      <div className="page-content">
        <p>${p.desc}</p>
        <br/>
        <p>This page is a native Next.js component built as part of the refactor.</p>
      </div>
    </main>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'app', p.path, 'page.tsx'), content.trim(), 'utf-8');
});

console.log("Pages created");
