import http from 'node:http';

// In-process server: only GET /hello, returns a fixed 200 response.
const server = http.createServer((req, res) => {
  if (req.url === "/hello") { res.writeHead(200, { "Content-Type": "text/plain" }); return res.end("hello world"); }
  res.writeHead(404); res.end();
});
await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch): read the response status code.
const resp = await fetch(base + "/hello");
console.log(resp.status);

server.close();
