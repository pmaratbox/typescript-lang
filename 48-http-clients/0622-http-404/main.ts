import http from 'node:http';

// In-process server: only GET /hello is defined; anything else returns 404.
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("hello world");
  }
  res.writeHead(404);
  res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch): request an undefined route, read the status code.
const resp = await fetch(base + "/missing");
console.log(resp.status); // 404

server.close();
