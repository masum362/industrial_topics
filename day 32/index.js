const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./router/router");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3001"],
    credentials: true,
  })
);
app.use("/", router);

console.log(process.env.SECRET_KEY)
app.listen(8000, () => {
  console.log("server running");
});
