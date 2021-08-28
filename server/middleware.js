const express = require("express");
const app = express();
const port = 3000;

const middle1 = (req, res, next) => {
  console.log("middle1");
  next(new Error("middle1 error"));
};

const middle2 = (req, res, next) => {
  console.log("middle2");
  next();
};

const handleError = (err, req, res, next) => {
  console.log("error!", err);
  next();
};

app.get("/", middle1, middle2, handleError, (req, res) => {
  console.log("end!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
