const { userCollection } = require("../db/connection");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const homePage = (req, res) => {
  console.log("calling");
  return res.send("hello world!");
};





module.exports = {
  homePage,
};
