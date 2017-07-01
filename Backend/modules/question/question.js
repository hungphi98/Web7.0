// TODO define router for /question/
//post question: save file
//save question: get question and display
const express = require('express');
let router = express.Router();
const path = require('path');
let questionFile = path.join(__dirname, '/../../modules/question/question.txt');
const fs = require('fs');

let fileQuestionHtml = path.join(__dirname,"../../public/question.html");
router.get('/', (req,res) => {
    res.sendFile(fileQuestionHtml);
});


router.post('/', (req, res) => {
  let question = req.body.question;
  fs.appendFile(questionFile, question, (err) => {
    if (err) throw err;
    else {
      fs.appendFile(questionFile, '\n', (err) => {
        if (err) throw err;
      });
      res.sendFile(questionFile);
    }
  });
});
module.exports = router;
