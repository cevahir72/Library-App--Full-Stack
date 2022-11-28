const books = require('./bookController');
const publishers = require('./publisherController');
const authors = require('./authorController');
const categories = require('./categoryController');

module.exports = {
  books,
  publishers,
  authors,
  categories,
};