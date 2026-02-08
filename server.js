const express = require("express");
const app = express();

// Serve frontend files
app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.send("API is working");
});

app.listen(2020, () => {
  console.log("Server running on port 2020");
});
