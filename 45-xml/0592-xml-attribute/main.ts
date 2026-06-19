// TypeScript — fast-xml-parser via tsx. Run: npx tsx main.ts
// Parse the fixed catalog and read the `id` attribute of the first <book>.
import { XMLParser } from 'fast-xml-parser';

const DOC = `<catalog>
  <book id="b1" lang="en"><title>Go</title><price>30</price></book>
  <book id="b2" lang="fr"><title>Rust</title><price>45</price></book>
</catalog>`;

const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@" });
const books = (parser.parse(DOC) as any).catalog.book as any[];

console.log(books[0]["@id"]);
