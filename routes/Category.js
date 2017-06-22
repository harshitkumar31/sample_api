var express = require('express');
var router = express.Router();
var Category=require('../models/category');
var handleError = require('../errors/index');

router.get('/(:title)?',function(req,res,next){
  if(req.params.title){

    Category.getCategoryByTitle(req.params.title,function(err,rows){

      if(err)
      {
        handleError(res, err);
      }
      else{
        if(rows.length ===1 ) {
          res.json(rows[0]);
        } else {
          handleError(res,{code: 'NOT_FOUND'});
        }
      }
    });
  }
  else{

    Category.getAllCategories(function(err,rows){
      
      if(err)
      {
        handleError(res, err);
      }
      else
      {
        res.json(rows);
      }
      
    });
  }
});

router.post('/',function(req,res,next){

  Category.addCategory(req.body,function(err,count){
    if(err)
    {
      // res.json(err);
      console.log(err);
      handleError(res, err);
    }
    else{
  res.json(req.body);
}
});
});
router.delete('/:title',function(req,res,next){

  Category.deleteCategory(req.params.title,function(err,count){

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
router.put('/:title',function(req,res,next){

  Category.updateCategory(req.params.title,req.body,function(err,rows){

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


module.exports=router;