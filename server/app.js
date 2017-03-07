import express from 'express'
import path from 'path'
import ejs from 'ejs'
import logger from 'morgan'
let app = express();
const port = 4000;

// view setup
app.set('views', path.join(__dirname, '../client/build'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(logger('dev'));

app.all("*", (req, res, next) => {
    res.render("index");
    next();
})

// catch 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, () => {
    console.log("server is running on port 4000");
});

module.exports = app;