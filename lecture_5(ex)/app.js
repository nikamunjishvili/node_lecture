const express = require("express");
const { writeFile, readFile } = require("fs");

const app = express();
const port = 2500;

const expenses = [
  { id: 1, category: "shopping", type: "expense" },
  { id: 2, category: "invoice", type: "income" },
  { id: 3, category: "sallary", type: "income" },
];

app.get("/api/v1/expenses/:expensesId", (req, res) => {
  const id = parseInt(req.params.expensesId);
  // if (isNaN(id)) {
  //   res.status(400);
  //   res.json({ message: "Invalid expenses Id" });
  //   return;
  // }

  // const exists = expenses.some((expense) => expense.id === id);
  // if (!exists) {
  //   res.status(400);
  //   res.json({ message: "expense not found" });
  //   return;
  // }

  res.json({ expense: expenses.find((exp) => exp.id === id) });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
