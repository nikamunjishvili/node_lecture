const http = require("http");

const array = [
  { id: 1, name: "Post 1" },
  { id: 2, name: "Post 2" },
  { id: 3, name: "Post 3" },
];

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end("<div>Hello World!!</div>");
      break;
    case "/posts":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(201);
      res.end(JSON.stringify(array));
      break;
    default:
      res.writeHead(404);
      res.end("Not Found");
      break;
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
