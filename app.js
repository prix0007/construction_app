const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const config = require('./config/database');


mongoose.connect(config.database, {native_parser:true, useNewUrlParser:true, useUnifiedTopology:true});
let db = mongoose.connection;

//Check connection
db.once('open', function () {
    console.log('Connected To Mongodb..');
});

//Check For db Errors

db.on('error', function (err) {
    console.log(err);
});
//Init App
const app = express();
//Load View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Express Session Middleware
app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

//Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});





//Home Route
app.get('/', function (req, res) {
    res.render('index',{
        title:"This is Some Construction Company"
    }); 
});

// Route Files
let navigation = require('./routes/navigation');
app.use('/navigation', navigation);


//Start Server
app.listen(3000, function () {
    console.log('Server started on port 3000...');
});