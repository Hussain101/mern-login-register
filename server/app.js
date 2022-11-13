const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require('./model/userSchema');

app.use(express.json());

// link to the route files
app.use(require("./router/auth"));

const port = process.env.PORT;

// for the connection
//middlesware
const middleware = (req, res, next) => {
  console.log("hello this is middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world from the server from app js");
});
app.get("/contact", middleware, (req, res) => {
  res.send("Hello contact me here");
});
app.get("/signin", (req, res) => {
  res.send("signin");
});
app.get("/signup", (req, res) => {
  res.send("sign up is here");
});

app.listen(3000, () => {
  console.log(`server is runnning at port number ${port}`);
});
