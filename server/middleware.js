const express = require("express");
const app = express();
const port = 3000;

const router = express.Router();

const middle1 = (req, res, next) => {
  console.log("middle1");
  next("route");
};

const middle2 = (req, res, next) => {
  console.log("middle2");
  next();
};

const handleError = (err, req, res, next) => {
  console.log("error");
  next();
};

app.use("/", router);
router.get("/", middle1, middle2, (req, res) => {
  console.log("end!");
  res.json("hello");
});

router.get("/", (req, res) => {
  console.log("end2!!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
