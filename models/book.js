var express = require('express');
var router = express.Router();
var db = require('../dbConnection/index');
var category = require('../models/Category');

router.put('/:cat|/:cat/', (req, res) => {
  category.create(req.params, (err, data) => {res.json(err || data)})
})

router.get('/:cat/:book', (req ,res, next) => {
  if(req.params.title)
    category.read(req.params.title, (err, data) => {res.json(err || data)})
  else 
    category.readAll((err, data) => {res.json(err || data)})
})

router.delete('/:title|/?', (req ,res, next) => {
  category.delete(req.params.title, (err, data) => {res.json(err || data)})
})


module.exports = router;