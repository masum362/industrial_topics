const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./router/router");
require("./db/connection");
dotenv.config();
// require('dotenv').config()

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/", router);
// console.log(process.env.MONGODBURI)
// run(process.env.MONGODBURI)
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server listening on port ${port} `);
});
