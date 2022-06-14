const express = require("express");

const router = express.Router();
const Post = require("./Model");

router.get("/getDetails", async (req, res) => {
  try {
    const data = await Post.find();
    res.json(data);
  } catch (error) {
    message: error;
  }``
});
router.get("/studentList", async (req, res) => {
  try {
    const list = {
      results: ["Rajesh", "Ramesh", "Sayali", "Sanjana"],
    };
    res.json(list);
  } catch (error) {
    message: error;
  }
});

router.post("/add", async (req, res) => {
  const dataWillBe = new Post({
    studentFirstName: req.body.studentFirstName,
    collegeName: req.body.collegeName,
    location: req.body.location,
  });
  try {
    const data = await dataWillBe.save();
    const result = { result: "success" };
    res.json(result);
  } catch (error) {
    message: error;
  }
});

module.exports = router;
