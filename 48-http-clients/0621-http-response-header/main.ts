import http from 'node:http';

// In-process server: GET /info sets a custom response header X-Count: 7.
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/info") {
    res.writeHead(200, { "Content-Type": "text/plain", "X-Count": "7" });
    return res.end("ok");
  }
  res.writeHead(404); res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch): read the X-Count response header.
const resp = await fetch(base + "/info");
console.log(resp.headers.get("x-count")); // 7

server.close();
