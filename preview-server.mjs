#!/usr/bin/env node
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = 43123;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function safeFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0] || "/");
  const rel = decoded === "/" ? "/index.html" : decoded;
  const resolved = path.normalize(path.join(ROOT, rel));
  if (!resolved.startsWith(ROOT + path.sep) && resolved !== ROOT) return null;
  return resolved;
}

const server = http.createServer((req, res) => {
  const file = safeFile(req.url || "/");
  if (!file) {
    res.writeHead(403, { Connection: "close" });
    res.end();
    return;
  }

  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
        Connection: "close",
      });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
      "Content-Length": st.size,
      Connection: "close",
      "Cache-Control": "no-store",
    });
    const stream = fs.createReadStream(file);
    stream.on("error", () => {
      if (!res.headersSent) res.writeHead(500, { Connection: "close" });
      res.end();
    });
    stream.pipe(res);
  });
});

server.keepAliveTimeout = 1;
server.headersTimeout = 60_000;
server.requestTimeout = 0;
server.timeout = 0;
server.on("clientError", (_err, socket) => {
  if (socket.writable) socket.end("HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n");
});
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serving on http://0.0.0.0:${PORT}/`);
});
