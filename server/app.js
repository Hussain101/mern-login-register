const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB =
  "mongodb+srv://Hussain:Hsrusher8$$@cluster0.uz7nfdv.mongodb.net/?retryWrites=true&w=majority";

// for the connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("the connection is successful");
  })
  .catch(() => {
    console.log("connection cant be successful ");
  });

const middleware = (req, res, next) => {
  console.log("hello this is middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world from the server");
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
  console.log("server is runnning at port number 3000");
});
