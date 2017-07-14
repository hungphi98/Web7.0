const express = require('express');
const questionModel = require('../question/questionSchema');

let router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/question');
});

router.get('/question', (req, res) => {
  res.redirect('/question');
});

router.post('/question/:id', (req, res) => {
  questionModel.findById(req.params.id, (err, doc) => {
    if (err) return console.log(err);
    let y = req.body.yn=='y' ? 1 : 0;
    let n = 1- y;
    updateAns = {yes: doc.answer.yes + y, no: doc.answer.no + n};
    questionModel.findByIdAndUpdate(req.params.id, {answer: updateAns}, (err, model) => {
      if (err) return console.log(err);
      res.redirect(`/question/${req.params.id}`);
    });
  });
});

router.post('/question', (req, res) => {
  questionModel.count({}, (err, count) => {
    if (err) return console.log(err);
    questionModel.create({
      _id : count,
      content : req.body.quest,
      answer : {
        yes : 0,
        no : 0
      }
    }, (err, doc) => {
      if (err) return console.log(err);
    });
    res.redirect('/question/'+count);
  });
});

module.exports = router;
