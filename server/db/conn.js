const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("the connection is successful");
  })
  .catch(() => {
    console.log("connection cant be successful ");
  });
