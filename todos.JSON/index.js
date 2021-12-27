const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html"
  });

  const html = fs.readFileSync("./index.html", "utf8");
  const user = "Node JS";

  html = html.replace("{ user }", user);
  res.end(html);
}).listen(1337);
console.log('server is runing')