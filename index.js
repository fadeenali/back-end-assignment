const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Student_Controller = require("./student/controller/Student_Controller");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

// Routes
app.use("/student", Student_Controller);

// DB connection and server start-up
const main = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/myassignment")
      .then(() => {
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
