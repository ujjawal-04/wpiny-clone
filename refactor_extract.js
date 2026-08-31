const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');

// Extract Header
const headerMatch = html.match(/(<header[^>]*>[\s\S]*?<\/header>)/i);
const headerHtml = headerMatch ? headerMatch[1] : '';

// Extract Footer
const footerMatch = html.match(/(<footer[^>]*>[\s\S]*?<\/footer>)/i);
const footerHtml = footerMatch ? footerMatch[1] : '';

// Extract Main content (everything between header and footer)
// In many WP themes, there's a div like id="content" or id="main"
// We can just extract between header and footer
let mainHtml = '';
if (headerMatch && footerMatch) {
  const headerEndIndex = html.indexOf(headerHtml) + headerHtml.length;
  const footerStartIndex = html.indexOf(footerHtml);
  if (footerStartIndex > headerEndIndex) {
    mainHtml = html.substring(headerEndIndex, footerStartIndex);
  }
}

function escapeHtmlForString(htmlStr) {
  return htmlStr.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

const headerTsx = `
import parse from 'html-react-parser';

export default function Header() {
  const html = \`${escapeHtmlForString(headerHtml)}\`;
  return <>{parse(html)}</>;
}
`;

const footerTsx = `
import parse from 'html-react-parser';

export default function Footer() {
  const html = \`${escapeHtmlForString(footerHtml)}\`;
  return <>{parse(html)}</>;
}
`;

const pageTsx = `
import parse from 'html-react-parser';
import Hero from '../components/Hero';

export default function Home() {
  const html = \`${escapeHtmlForString(mainHtml)}\`;
  return (
    <main>
      {parse(html)}
    </main>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'components', 'Header.tsx'), headerTsx.trim(), 'utf-8');
fs.writeFileSync(path.join(__dirname, 'components', 'Footer.tsx'), footerTsx.trim(), 'utf-8');
fs.writeFileSync(path.join(__dirname, 'app', 'page.tsx'), pageTsx.trim(), 'utf-8');

// We also need to add back the head tags to layout.tsx so CSS works properly!
// I'll leave layout.tsx alone since it already parses the head from index.html!

console.log("Extraction to components complete.");
