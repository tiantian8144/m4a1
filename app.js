const createError = require('http-errors');
const express     = require('express');
const compression = require('compression');
const path        = require('path');
const bodyParser  = require("body-parser");
const cookieParser = require('cookie-parser');
const logger      = require('morgan');

const indexController = require('./Controller/index.js');
const userController = require('./Controller/user.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.json());

app.all('*', function(req, res, next) {
  //设置请求体,支持 post、get、jsonp
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf8");
  next();
});

app.use('/', indexController);
app.post('/user', userController);


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
