import http from 'node:http';

// In-process server: POST /double reads JSON {"x":N} and returns {"doubled":2N}.
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/double") {
    const chunks: Buffer[] = [];
    req.on("data", c => chunks.push(c as Buffer));
    req.on("end", () => {
      const { x } = JSON.parse(Buffer.concat(chunks).toString());
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ doubled: x * 2 }));
    });
    return;
  }
  res.writeHead(404);
  res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch): POST JSON, parse the JSON reply.
const resp = await fetch(base + "/double", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ x: 5 }),
});
const data = await resp.json();
console.log(data.doubled);

server.close();
