const express = require('express');
const router = express.Router();
const issueModel = require('../models/issues');

// index get
router.post('/login', (req, res) => {
   if (req.body.username == 'admin' && req.body.password == '123456') {
      res.send({ token: 'admin@123' }).status(201);
   } else {
      res.send({ msg: 'username or password is wrong' }).status(401);
   }
});

router.post('/issueBook', (req, res) => {
   const { issuerName, issueDate, issueStatus, returnDate } = req.body;
   const issueData = new issueModel({
      issuerName,
      issueDate,
      issueStatus,
      returnDate,
   });
});

module.exports = router;