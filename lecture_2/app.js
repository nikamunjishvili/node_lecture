const axios = require("axios");
const {writeFile} = require("fs");

axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
  const data = res.data;

  writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });

  
});
