var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

/*
var member = require('./routes/member/member');
var initiative = require('./routes/initiative/initiative');
var underlyingAccount = require('./routes/underlyingaccount/underlyingAccount');
var budget = require('./routes/budget/budget');
var journal = require('./routes/journal/journal');
var posting = require('./routes/posting/posting');
var transaction = require('./routes/transaction/transaction');
var maintenance = require('./routes/maintenance/maintenance');
var key = require('./routes/key/key');
var security = require('./routes/security/security');
var creditNote = require('./routes/creditnote/creditnote');
*/

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '')));

app.use('/', routes);

/*
app.use('/api/v1/member', member);
app.use('/api/v1/member/:id', member);
app.use('/api/v1/member/ping', member);

app.use('/api/v1/initiative', initiative);
app.use('/api/v1/initiative/reconcile', initiative);
app.use('/api/v1/initiative/deposit', initiative);
app.use('/api/v1/initiative/:id', initiative);
app.use('/api/v1/initiative/ping', initiative);

app.use('/api/v1/underlyingAccount', underlyingAccount);
app.use('/api/v1/underlyingAccount/reconcile', underlyingAccount);
app.use('/api/v1/underlyingAccount/:id', underlyingAccount);
app.use('/api/v1/underlyingAccount/ping', underlyingAccount);

app.use('/api/v1/budget', budget);
app.use('/api/v1/budget/reconcile', budget);
app.use('/api/v1/budget/deposit', budget);
app.use('/api/v1/budget/withdraw', budget);
app.use('/api/v1/budget/:id/transactions', budget);
app.use('/api/v1/budget/:id', budget);
app.use('/api/v1/budget/ping', budget);

app.use('/api/v1/creditnote', creditNote);
app.use('/api/v1/creditnote/process', creditNote);
app.use('/api/v1/creditnote/:id', creditNote);
app.use('/api/v1/creditnote/ping', creditNote);

app.use('/api/v1/journal', journal);
app.use('/api/v1/journal/:id', journal);
app.use('/api/v1/journal/ping', journal);

app.use('/api/v1/posting', posting);
app.use('/api/v1/posting/:id', posting);
app.use('/api/v1/posting/ping', posting);
app.use('/api/v1/posting/process/journals', posting);

app.use('/api/v1/transaction', transaction);
app.use('/api/v1/transaction/:id', transaction);
app.use('/api/v1/transaction/ping', transaction);

app.use('/api/v1/maintenance', maintenance);
app.use('/api/v1/maintenance/journal/markAllAsPosted', maintenance);
app.use('/api/v1/maintenance/journal/markAllAsNotPosted', maintenance);
app.use('/api/v1/maintenance/transaction/markAllAsNotPosted', maintenance);
app.use('/api/v1/maintenance/ping', maintenance);

app.use('/api/v1/key', key);
app.use('/api/v1/key/:name', key);
app.use('/api/v1/key/ping', key);

app.use('/api/v1/security', security);

*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
