const express = require("express");
const router = express.Router();
const issueModel = require("../models/issues");

// index get
router.post("/login", (req, res) => {
  if (req.body.username == "admin" && req.body.password == "123456") {
    res.send({ token: "admin@123" }).status(201);
  } else {
    res.send({ msg: "username or password is wrong" }).status(401);
  }
});

router.post("/issueBook", (req, res) => {
  const { issuerName, issueDate, issueStatus, returnDate } = req.body;
  const issueData = new issueModel({
    issuerName,
    issueDate,
    issueStatus: true,
  });

  issueData
    .save()
    .then((response) => {
      res.send({ msg: "Issued sucessfully", data: response }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: "err", err: err }).status(500);
    });
});

router.post("/returnBook", (req, res) => {
  const { id } = req.body;
  // const issueData = new issueModel({
  //   issuerName,
  //   issueDate,
  //   issueStatus: true,
  // });
  issueModel
    .findByIdAndUpdate(
      { _id: id },
      {
        issueStatus: false,
        returnDate: "5/5/23",
      }
    )
    .then((response) => {
      res.send({ msg: "returned sucessfully", data: response }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: "err", err: err }).status(500);
    });
});

module.exports = router;
