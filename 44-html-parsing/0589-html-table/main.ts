// Extract every <td> cell from a table with cheerio.
import * as cheerio from 'cheerio';

const DOC = `<table><tr><td>r1c1</td><td>r1c2</td></tr><tr><td>r2c1</td><td>r2c2</td></tr></table>`;

const $ = cheerio.load(DOC);

// `td` matches every table cell; cheerio yields them in document (row-major)
// order. Take each cell's text and join with commas.
const cells = $('td').map((_i, el) => $(el).text()).get();
console.log(cells.join(','));
