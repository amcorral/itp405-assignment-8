var bookshelf = require('./../bookshelf');
var Book = require('./book');

var Review = bookshelf.Model.extend({
  tableName: 'reviews',
  book: function(){
    return this.hasOne(Book);
  }
});

module.exports = Review;
