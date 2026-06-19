// TypeScript — markdown-it via tsx. Run: npx tsx main.ts
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt('commonmark');         // MUST be commonmark preset
process.stdout.write(md.render("*italic*").replace(/\n+$/, ""));  // <p><em>italic</em></p>
