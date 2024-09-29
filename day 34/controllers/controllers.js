const { userCollection } = require("../db/connection");
const {ObjectId} = require("mongodb")

const homePage = (req, res) => {
  console.log("calling");
  return res.send("hello world!");
};

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);
    const isAlreadyRegistered = await userCollection.findOne({
      email: userData.email,
    });

    if (!isAlreadyRegistered) {
      const newUser = await userCollection.insertOne(userData);
      return res.send(newUser);
    }

    return res.send("register user called");
  } catch (error) {
    return res.send(error.message);
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await userCollection.find({}).toArray();
    return res.send(users);
  } catch (error) {
    console.log(error);
    return res.send(error.message);
  }
};
const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await userCollection.findOne({ _id: new ObjectId(id) });
    console.log(user);
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send(error.message);
  }
};
const updateFullUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const query = {
       _id: new ObjectId(id)
    }
    const user = await userCollection.updateOne(query,{$set:userData})
    console.log(user)
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const user = await userCollection.updateOne({_id:new ObjectId(id)},{
      $set:userData
    });
    console.log(user);
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send(error.message);
  }
};



module.exports = { homePage, registerUser, getAllUser, getUser ,updateFullUser,updateUser};
