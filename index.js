const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("Hello from server");
    res.end();
  }

  //returning html

  if (req.method === "GET" && req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello</h1>");
    console.log(req.url);
    res.end();
  }

  //returning json

  if (req.method === "GET" && req.url === "/course") {
    res.writeHead(200, { "Content-Type": "application/jspm" });
    const data = {
      name: "LEARN NODE",
      desc: "BUILD APIS WITH NODEJS",
    };
    console.log(req.url);
    res.end(JSON.stringify(data));
  }
});

server.listen(3000, () => {
  console.log("server on localhost:3000");
});
