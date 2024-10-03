const express = require("express");
const { homePage, addTodo, getAllTodo, updateTodo, deleteTodo } = require("../controllers/controllers");


const router = express.Router();

// public get routes
router.get("/",homePage );

// todo save
router.post("/add-todo",addTodo)
// get all todos
router.get("/get-todos",getAllTodo);
// update todo
router.patch("/update-todo/:id",updateTodo)

// delete todo
router.delete("/delete-todo/:id",deleteTodo);

module.exports = router;