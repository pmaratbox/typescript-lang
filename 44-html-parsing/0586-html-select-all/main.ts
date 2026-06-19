// Select ALL elements matching a CSS selector with cheerio.
import * as cheerio from 'cheerio';

const DOC = `<html><body>
<h1>Hello</h1>
<span id="status">active</span>
<ul class="items">
<li class="item">apple</li>
<li class="item">banana</li>
<li class="item">cherry</li>
</ul>
<a href="https://example.com">site</a>
<div class="content"><p>first</p><p>second</p></div>
</body></html>`;

const $ = cheerio.load(DOC);

// `.item` matches every element with class "item"; take each one's text,
// then join with commas so inter-element whitespace never matters.
const texts = $('.item').map((_i, el) => $(el).text()).get();
console.log(texts.join(','));
