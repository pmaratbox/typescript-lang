// Query parameters — global fetch (client) against an in-process node:http server.
import http from 'node:http';

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://127.0.0.1");
  if (req.method === "GET" && url.pathname === "/greet") {
    const name = url.searchParams.get("name") ?? "";
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(`hi ${name}`);
  }
  res.writeHead(404); res.end();
});

await new Promise<void>(r => server.listen(0, "127.0.0.1", () => r()));
const base = `http://127.0.0.1:${(server.address() as any).port}`;

const params = new URLSearchParams({ name: "Bob" });
console.log(await (await fetch(`${base}/greet?${params}`)).text());

server.close();
