const fs = require('fs');
const crypt = require('crypto');
const anotherModule = require('./module.js');
const express = require('express');
const questionRouter = require('./modules/question/question.js');
const bodyParser = require('body-parser');

// fs.writeFileSync('helloworld.txt','Hello World');
// anotherModule.readFile();

let app = express();


app.get('/', (req,res) => {
    res.send('Welcome to the app');
    // res.sendFile();
    // res.redirect('/');
});
app.listen(1303, () =>{
    console.log('app is running');
});
app.use(bodyParser.urlencoded({ extended : true}));

app.use('/question',questionRouter);


app.get('/object', (req,res) =>{
    let testObject = {
        a: "test",
        b: "abc"
    }

    res.send(testObject);
});

app.get('/redirect', (req,res) =>{
    res.redirect('/question');
});


//console.log("Hello World");
