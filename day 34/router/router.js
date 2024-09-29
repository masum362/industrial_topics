const express = require("express");
const { homePage, registerUser, getAllUser,getUser, updateFullUser, updateUser } = require("../controllers/controllers");

const router = express.Router();

// get request 
router.get("/",homePage );
router.get("/all-users",getAllUser);
router.get("/user/:id",getUser)

// post request
router.post("/add-user",registerUser)

// put
router.put("/update-user/:id",updateFullUser);

// patch 
router.patch("/update-user/:id",updateUser)

module.exports = router;