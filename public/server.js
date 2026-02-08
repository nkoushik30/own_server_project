const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server running on phone");
});

app.listen(2020, () => {
  console.log("Server started on port 2020");
});
