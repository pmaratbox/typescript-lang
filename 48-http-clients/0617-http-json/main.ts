import http from 'node:http';

// In-process server: only the route this lesson needs.
const server = http.createServer((req, res) => {
  if (req.url === "/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ name: "Alice", age: 30 }));
  }
  res.writeHead(404);
  res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch) — parse the JSON body, print the name field.
const user = await (await fetch(base + "/user")).json();
console.log(user.name);

server.close();
