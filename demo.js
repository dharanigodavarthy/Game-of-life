var express = require('express')
var app = express();
let ejs = require('ejs');
var bodyParser = require('body-parser')
 
app.set('view engine','ejs');

// create application/json parser
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'./assests'));
// create application/x-www-form-urlencoded parser

 
app.get('/', function (req, res) {
  let person={};
  person.name="Dharani";
  person.age=21;
  person.company='mountblue';
  res.render('form');
})
// POST /login gets urlencoded bodies
app.post('/login',function (req, res) {
  console.log(req.url);
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})

app.get('/home/:name', function (req, res) {
  let person={};
  person.name=req.params.name;
  person.age=21;
  person.company='mountblue';
  res.render('index',{person:person});
})
 
app.listen(3000);