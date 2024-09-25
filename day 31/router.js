const express = require('express');

const router = express.Router();

router.get("/",(req, res )=>{
    return res.send("hello world!");
})

router.get("/user",(req, res )=>{
    return res.send("hello user!");
})

module.exports = router;