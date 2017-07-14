const express = require('express');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const viewRouter = require('./modules/view/view');
const apiRouter = require('./modules/api/api');
const mongoose = require('mongoose');

let app = express();

mongoose.connect('mongodb://localhost/quyetde', (err) =>{
  if (err) {
    console.log(err);
  } else {
    console.log('Connect to db successfully');
  }
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({extended : true}));

app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/',viewRouter);
app.use('/api',apiRouter);
app.use('/css', express.static(__dirname+ '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname+ '/node_modules/bootstrap/dist/js'));
app.listen(6180, () => {
  console.log('Listening on: 6180');
});
