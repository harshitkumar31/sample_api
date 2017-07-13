var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var categories = require('./routes/Category')
var books = require('./routes/Book')
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/categories', categories);
app.use('/categories', books)
app.listen(3000);

/*
// var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// var Books = require('./routes/Books');
// var handleError = require('./errors/index');


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = handleError(res,{
  	code: 'NOT_FOUND',
  	status: 404,
  });
  console.log('err was ',err);
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({err:'Oops! Something went wrong'});
});

*/