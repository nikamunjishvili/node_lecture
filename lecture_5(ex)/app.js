const express = require("express");

const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Nika", lastName: "Munjishvili", address: "Gori" },
  { id: 2, name: "Luka", lastName: "Lukadze", address: "Tbilisi" },
  { id: 3, name: "Saba", lastName: "Sabashvili", address: "Batumi" },
];

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400);
    res.json({ message: "Invalid Users ID" });
    return;
  }

  res.json({ user: users.find((us) => us.id === id) });
});

app.post("/api/users", (req, res) => {
  let input = req.body;

  if (!input) {
    res.status(400);
    res.json({ message: "Invalid input" });
    return;
  }

  const { name, lastName, address } = input;

  if (!name) {
    res.status(400);
    res.json({ message: "missing userName" });
    return;
  }

  if (!lastName) {
    res.status(400);
    res.json({ message: "missing lastName" });
    return;
  }

  if (!address) {
    res.status(400);
    res.json({ message: "missing address" });
    return;
  }

  const data = input;
  users.push(data);

  res.status(201);
  res.json({ messages: "User created sucessfull" });
});

app.put("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const update = req.body;

  if (isNaN(id)) {
    res.status(400);
    res.json({ message: "Invalid Users ID" });
    return;
  }

  if (!update) {
    res.status(400);
    res.json({ message: "Invalid input for update" });
    return;
  }

  const userToUpdate = users.find((us) => us.id === id);

  if (!userToUpdate) {
    res.status(404);
    res.json({ message: "User not found" });
    return;
  }

  userToUpdate.name = update.name || userToUpdate.name;
  userToUpdate.lastName = update.lastName || userToUpdate.lastName;
  userToUpdate.address = update.address || userToUpdate.address;

  res.json({ user: userToUpdate });
});

app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400);
    res.json({ message: "Invalid Users ID" });
    return;
  }

  const filteredUsers = users.filter((us) => us.id !== id);

  if (filteredUsers.length === users.length) {
    res.status(404);
    res.json({ message: "User not found" });
    return;
  }

  users.length = 0;
  Array.prototype.push.apply(users, filteredUsers);

  res.json({ message: "User deleted successfully" });
});

app.listen(2400, () => {
  console.log(`Server is running on port ${2400}`);
});
