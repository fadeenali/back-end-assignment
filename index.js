const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PostRouter = require("./router");
const app = express();
const port = 5000;
app.use(bodyParser.json());

app.use("/student", PostRouter);




const main = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/myassignment").then(() => {
      console.log("DB is connected");
    });

    app.listen(port, () => {
      console.log(`server is up and runnin on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
