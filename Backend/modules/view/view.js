const express = require('express');
const questionModel = require('../question/questionSchema');

let router = express.Router();

router.get('/question', (req, res) => {
  questionModel.count({}, (err, count) => {
    if (err) return console.log(err);
    if (count==0) return render(res, 'Hãy hỏi câu đầu tiên:');
    let randID = Math.floor(Math.random()*count);
    questionModel.findById(randID, (err, doc) => {
      if (err) return console.log(err);
      res.render('answer', {
        id : randID,
        content: doc.content
      });
    });
  });
});

router.get('/question/:id', (req,res) => {
  questioninfo(res, req.params.id, 2);
});

router.post('/question', (req, res) => {
  questioninfo(res, req.body.id, 1);
});

router.get('/api/question/:id', (req, res) => {
  questioninfo(res, req.params.id, 0);
});


let render = (res, content) => {
  res.render('idinfo', {
    body: content
  });
};

router.get('/ask', (req, res) => {
  res.render('ask');
});

router.get('/', (req,res) => {
  res.redirect('/question');
});

module.exports = router;
