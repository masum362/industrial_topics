const express = require('express');
const {checkedMiddleWare} = require("../middleware/middleware")

const router = express.Router();

router.get("/",checkedMiddleWare,(req, res) =>{
 return res.status(201).json({message:"request successfully accepted"});   
})


module.exports = router;