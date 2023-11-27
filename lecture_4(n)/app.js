const { program } = require("commander");
const { writeFile, unlink, readFile } = require("fs");
const moment = require("moment");

program
  .option("-amount <char>")
  .option("-category <char>")
  .option("-type <char>");

program.parse();

const options = program.opts();
const date = moment().format();
const newArray = [];
const objects = {
  ...options,
  id: Math.floor(Math.random() * 10) + 1,
  Amount: parseInt(options.Amount),
  date: date,
};
newArray.push(objects);

readFile("data.json", "utf-8", (err, data) => {
  if (err) {
    populaateExpenses([options]);
    return;
  }

  const parsed = JSON.parse(data);
  populaateExpenses(parsed.concat(parsed));
});

function populaateExpenses(expenses) {
  writeFile("data.json", JSON.stringify(expenses, null, 2), (err) => {
    if (err) {
      throw new Error("Failed!!");
    }
    console.log("Success!!");
  });
}
