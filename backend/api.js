var express = require('express');
var router = express.Router();

const author = require('./controllers').authorControlller;
const book = require('./controllers').bookController;
const category = require('./controllers').categoryController;
const publisher = require('./controllers').publisherController;

//Home Page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });


//Book Routes
router.get('/api/book', book.bookList);
router.get('/api/book/:search/:order', book.bookSearch);

//Author Routes
router.get('/api/author', author.authorList);
router.post('/api/author/:name', author.postAuthor);

//Category Routes
router.get('/api/category', category.categoryList);
router.post('/api/category/:name', category.postCategory);

//Publisher Routes
router.get('/api/publisher', publisher.publisherList);
router.post('/api/publisher/:name', publisher.postPublisher);

module.exports= router;

