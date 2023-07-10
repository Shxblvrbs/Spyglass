const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../Models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const checkUser = await userModel.findOne({ email });
  console.log("Check user");
  if (checkUser) {
    res.send({ message: "User with the same Email already exist" });
    return;
  } else {
    console.log("Body", firstName, lastName, email, password);

    const user = new userModel({ firstName, lastName, email, password });
    user.save().then((user, err) => {
      console.log("err: ", err, "user: ", user);
      if (err) {
        return res.send({ message: err.message });
      }
      res.status(200).json(user);
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Body:", email, password);
    const user = await userModel.findOne({ email: email });

    console.log("user");
    res.status(200).json(user);
  } catch (err) {
    res.status(403).json(err);
  }
});

module.exports = router;
