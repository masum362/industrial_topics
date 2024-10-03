const { todoCollection, userCollection } = require("../db/connection");
const { ObjectId } = require("mongodb");
require("dotenv").config();

const homePage = (req, res) => {
  console.log("calling");
  return res.send("hello world!");
};

const addTodo = async (req, res) => {
  console.log("called");
  try {
    const { todo } = req.body;
    const newTodo = {
      _id: new ObjectId(),
      text: todo,
    };
    console.log(newTodo);
    const TodoSuccessRes = await todoCollection.insertOne(newTodo);
    console.log(TodoSuccessRes);
    return res.status(200).json({ message: "todo added successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(501).json({ message: "something went wrong!" });
  }
};

const getAllTodo = async (req, res) => {
  try {
    const allTodos = await todoCollection.find({}).toArray();
    return res.status(200).json({ todos: allTodos });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  console.log("called");
  try {
    const { id } = req.params;
    const { todo } = req.body;

    console.log({ id, todo });
    const updatedRes = await todoCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          text: todo,
        },
      }
    );

    return res.status(200).json({ response: updatedRes });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedResponse = await todoCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return res.status(200).json({ response: deletedResponse });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
};

module.exports = {
  homePage,
  addTodo,
  getAllTodo,
  updateTodo,
  deleteTodo,
};
