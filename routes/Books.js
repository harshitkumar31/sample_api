var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var handleError = require('../errors/index');

router.get('/book/:bookId', function(req, res, next){

});

router.get('/:title/books/', function(req, res, next){

	if(Object.keys(req.query).length > 0){

	} else {
		Book.getBooksByCategory(req.params.title, function(err, rows){
			if(err){
				handleError(err, res);
			} else {
				res.json(rows);
			}
		})
	}

});



module.exports = router;