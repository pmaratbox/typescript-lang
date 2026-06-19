// TypeScript — markdown-it via tsx. Run: npx tsx main.ts  (group 46-markdown/package.json present)
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt('commonmark');         // MUST be commonmark preset
process.stdout.write(md.render("- a\n- b").replace(/\n+$/, ""));  // <ul>\n<li>a</li>\n<li>b</li>\n</ul>
