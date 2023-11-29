const http = require("http");
const { writeFile, unlink } = require("fs");

const array = [
  { id: 1, name: "Nika", email: "nika@gmail.com" },
  { id: 2, name: "Luka", email: "luka@gmail.com" },
  { id: 3, name: "Saba", email: "saba@gmail.com" },
];

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end("<div>Hello World!!</div>");
        break;
      case "/item":
        res.setHeader("Content-Type", "application/json");
        res.writeHead(201);
        writeFile("data.json", JSON.stringify(array,null,2), (err) => {
          if (err) throw err;
          console.log("Data written to file successfully!");
          
          setTimeout(() => {
            unlink('data.json', () => {})
          }, 5000)
          res.end(JSON.stringify(array));
        });
        return;

      default:
        res.writeHead(404);
        res.end("404 not found");
        break;
    }
  })
  .listen(8080, () => {
    console.log(`Listening on port ${8080}`);
  });
