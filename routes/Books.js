var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var handleError = require('../errors/index');

router.get('/',function(req, res, next){

	if(Object.keys(req.query).length > 0){
		Book.searchBooks(req.query, function(err, rows){
			if(err){
				handleError(res, err);
			} else {
				res.json(rows);
			}
		});
	} else {
		Book.getAllBooks(function(err, rows){
			if(err){
				handleError(res, err);
			} else {
				res.json(rows);
			}
		});
	}
});

router.get('/:id', function(req, res, next){

	if(Object.keys(req.query).length > 0){
		Book.searchBooks(req.query, function(err, rows){
			if(err){
				handleError(res, err);
			} else {
				res.json(rows);
			}
		});
	} else {
		Book.getBooksById(req.params.id, function(err, rows){
			if(err){
				handleError(res, err);
			} else {
				res.json(rows);
			}
		})
	}

});

router.post('/', function(req,res, next){

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

router.put('/:id',function(req,res,next){

	Book.updateBook(req.params.id,req.body,function(err,rows){

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

router.delete('/:id',function(req,res,next){

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