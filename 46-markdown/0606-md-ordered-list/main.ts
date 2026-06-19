// TypeScript — markdown-it via tsx. Run: npx tsx main.ts
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt('commonmark');         // MUST be commonmark preset
process.stdout.write(md.render("1. a\n2. b").replace(/\n+$/, ""));  // <ol>...<li>a</li><li>b</li></ol>
