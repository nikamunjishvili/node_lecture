const http = require("http");
const users = [
  { id: 1, name: "Nika", email: "nika@gmail.com" },
  { id: 2, name: "Luka", email: "luka@gmail.com" },
  { id: 3, name: "Saba", email: "saba@gmail.com" },
];

http
  .createServer((req, res) => {
    const usersResource = req.url.includes("/users");
    if (usersResource) {
      const parts = req.url.split("/");
      const hasMoreParts = parts.length > 2;
      if (hasMoreParts) {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({ id: parts[2] }));
      } else {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(users, null, 2));
      }
    }
  })
  .listen(4500, () => {
    console.log(`server is running port ${4500}`);
  });
