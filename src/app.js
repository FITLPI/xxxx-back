require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(process.env.PATH_FOR_BUILD, "dist")));
app.get("*", (req, res) => {
  console.log(req.headers);
  res.end();
});
app.get("/", (req, res) => {
  res.sendFile(path.join(process.env.PATH_FOR_BUILD, "dist", "index.html"));
  res.end();
});
app.get("/status", (req, res) => {
  console.log("ok");
  res.end();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
