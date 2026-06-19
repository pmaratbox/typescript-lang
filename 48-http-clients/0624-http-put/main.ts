import http from 'node:http';

// In-process server: PUT /item returns the fixed text "updated".
const server = http.createServer((req, res) => {
  if (req.method === "PUT" && req.url === "/item") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("updated");
  }
  res.writeHead(404);
  res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

// Real HTTP client (global fetch): make a PUT request, print the response body.
const resp = await fetch(base + "/item", { method: "PUT" });
console.log(await resp.text());

server.close();
