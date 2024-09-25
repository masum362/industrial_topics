const express = require("express");
const cors = require("cors"); // external module
const router = require("./router");
const app = express();

// get ,post, put , delete ,patch

app.use("/", router);
cors({
  origin: "http://localhost:5173",
  credentials: true,
});

app.listen(8000, () => {
  console.log("app listening on port 8000");
});
