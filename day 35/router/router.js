const express = require("express");
const { homePage, registerUser, getAllUser,getUser, updateFullUser, updateUser,loginUser } = require("../controllers/controllers");
const { auth, checkRole } = require("../middleware/privateRoutes");

const router = express.Router();

// public get routes
router.get("/",homePage );

// authentication
router.post("/login",loginUser);

// protected get request  for admin
router.get("/all-users",auth,checkRole("admin"),getAllUser);
router.get("/user/:id",getUser)

// protected post request for [manager, admin]
router.post("/add-user",registerUser)

// protected put for [manager,admin,user]
router.put("/update-user/:id",auth,updateFullUser);

// // patch 
// router.patch("/update-user/:id",updateUser)

module.exports = router;