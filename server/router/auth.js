const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

require("../db/conn");
require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from the server from auth js");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cnpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cnpassword) {
    return res
      .status(422)
      .json({ error: "All these fields must be fulfilled" });
  }
  try {
    const userExit = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "User already exist " });
    }

    const user = new User({ name, email, phone, work, password, cnpassword });

    await user.save();
    res.status(201).json({ message: "User Registeres successfully" });
  } catch (err) {
    console.log(err);
  }
});

//LOGIN ROUTE
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ err: "field can't be empty" });
    }
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      res.status(400).json({ error: "user doesn't exist" });
    } else {
      res.json({ message: "user signin successfully " });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
