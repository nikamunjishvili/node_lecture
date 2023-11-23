const { writeFile, mkdir, unlink } = require("fs");
const {join} = require('path');
const { cenvertArrayJson } = require("./helper");
const moment = require("moment");

console.log("moment is ---> ", moment())
const products = [
  { id: 1, name: "product_1" },
  { id: 2, name: "product_2" },
  { id: 3, name: "product_3" },
];

const parsed = cenvertArrayJson(products);

mkdir('data', () => {
  writeFile(join(__dirname, "data", "data.json"), parsed, (err) => {
    if (err) {
      console.error("Error creating file:", err);
      return;
    }
    console.log("File created in data folder");
  });

  setTimeout(() => {
    unlink(join(__dirname, "data", "data.json"), (err) => {
      if(err){
        throw new Error("deleted sucessfull!!")
      }
    })
  }, 5000)
})