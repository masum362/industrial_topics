const express = require("express");
const { userCollection } = require("../db/connection");

const router = express.Router();

router.get("/", function (req, res) {
  return res.send("hello world!");
});

router.post("/register", function (req, res) {

    return res.send("hello register!");
});
router.put("/update-user", function (req, res) {
    return res.send("hello update user!");
});
router.delete("/delete-user/:id", function (req, res) {
    return res.send("hello delete user!");
});


module.exports = router;