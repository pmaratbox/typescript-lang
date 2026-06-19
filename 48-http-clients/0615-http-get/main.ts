// HTTP client: global fetch (WHATWG Fetch, built into node).
// In-process server: node:http listening on 127.0.0.1:0 (ephemeral loopback port).
import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('hello world');
  }
  res.writeHead(404);
  res.end();
});

await new Promise<void>((r) => server.listen(0, '127.0.0.1', () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

const response = await fetch(base + '/hello');
console.log(await response.text());

server.close();
