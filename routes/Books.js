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
				handleError(res, err);
			} else {
				res.json(rows);
			}
		})
	}

});

router.post('/:title/books', function(req,res, next){

	Book.addBook(req.body, function(err, count){
		if(err){
			handleError(res,err);
		} else {
			res.json({
				msg: "Success"
			});
		}
	})

});

router.put('/:title/books/:id',function(req,res,next){

	Book.updateBook(req.params.id,req.body,function(err,rows){

		if(err)
		{
			handleError(res, err);
		}
		else
		{
			res.json(rows);
		}
	});
});

router.delete('/:title/books/:id',function(req,res,next){

	Book.deleteBook(parseInt(req.params.id,10),function(err,count){

		if(err)
		{
			handleError(res, err);
		}
		else
		{
			res.json({
				msg: "Success"
			});
		}

	});
});


module.exports = router;