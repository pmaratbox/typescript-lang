import http from 'node:http';

// In-process server: POST /echo returns the request body verbatim.
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/echo") {
    const chunks: Buffer[] = [];
    req.on("data", c => chunks.push(c as Buffer));
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(Buffer.concat(chunks));
    });
    return;
  }
  res.writeHead(404);
  res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch): POST a body, print the echoed response.
const resp = await fetch(base + "/echo", { method: "POST", body: "ping" });
console.log(await resp.text());

server.close();
