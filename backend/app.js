const express = require('express');
//LOGLARI ÇALIŞTIĞINI TERMİNALDE GÖRMEK İÇİN
var logger = require('morgan');
const api = require("./api")

const PORT = process.env.PORT || 8000;

const app = express();


app.use('/', api);
app.use(logger('dev'));
//JSON PARSER
app.use(express.json());

// app.use(express.static(path.resolve(__dirname, '..', 'build')))
// // Serve our api
// .use('/api', require('./api'));


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

  module.exports = app;