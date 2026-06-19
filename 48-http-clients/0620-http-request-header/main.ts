import http from 'node:http';

// In-process server: GET /token echoes the X-Token request header in the body.
const server = http.createServer((req, res) => {
  if (req.url === "/token") {
    const token = (req.headers["x-token"] as string) ?? "";
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(token);
  }
  res.writeHead(404);
  res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch) sends a custom request header.
const resp = await fetch(base + "/token", { headers: { "X-Token": "secret" } });
console.log(await resp.text());

server.close();
