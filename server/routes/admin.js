const express = require('express');
const router = express.Router();
const issueModel = require('../models/issues');
const booksModel = require('../models/books');

// index get
router.post('/login', (req, res) => {
   if (req.body.username == 'admin' && req.body.password == '123456') {
      res.send({ token: 'admin@123' }).status(201);
   } else {
      res.send({ msg: 'username or password is wrong' }).status(401);
   }
});

router.post('/issueBook', async (req, res) => {
   const { issuerName, bookId, bookName } = req.body;
   const issueData = new issueModel({
      issuerName,
      issueDate: new Date()
         .toJSON()
         .slice(0, 10)
         .split('-')
         .reverse()
         .join('/'),
      issueStatus: true,
      bookId,
      bookName,
   });

   issueData
      .save()
      .then(response => {
         booksModel
            .findOneAndUpdate({ accNo: bookId }, { available: false })
            .then(response => {
               res.send({ msg: 'Issued sucessfully', data: response }).status(
                  200,
               );
            })
            .catch(err => {
               console.log(err);
               res.send({ msg: 'err', err: err }).status(500);
            });
      })
      .catch(err => {
         console.log(err);
         res.send({ msg: 'err', err: err }).status(500);
      });
});

router.post('/returnBook', (req, res) => {
   const { id, bookId } = req.body;

   issueModel
      .findByIdAndUpdate(
         { _id: id },
         {
            issueStatus: false,
            returnDate: new Date()
               .toJSON()
               .slice(0, 10)
               .split('-')
               .reverse()
               .join('/'),
         },
      )
      .then(response => {
         booksModel
            .findOneAndUpdate({ accNo: bookId }, { available: true })
            .then(response => {
               res.send({ msg: 'returned sucessfully', data: response }).status(
                  200,
               );
            })
            .catch(err => {
               console.log(err);
               res.send({ msg: 'err', err: err }).status(500);
            });
      })
      .catch(err => {
         console.log(err);
         res.send({ msg: 'err', err: err }).status(500);
      });
});

router.get('/issues', (req, res) => {
   issueModel
      .find()
      .then(response => {
         res.send(response).status(200);
      })
      .catch(err => {
         res.send(err).status(500);
      });
});
module.exports = router;
