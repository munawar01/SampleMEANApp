var express = require('express');
var router = express.Router();
var validator = require("email-validator");
var CustomError = require('../errors/custom-error');

var mongoose = require('mongoose');
var Customer = require('../models/Customer.js');

/* GET /customers listing. */
router.get('/', function(req, res, next) {
  Customer.find(function (err, customers) {
    if (err) return next(err);
    res.json(customers);
  });
});

/* POST /customers */
router.post('/', function(req, res, next) {
  if(!validator.validate(req.body.email)) return next(new CustomError("Invalid email address", 500));
  // check duplicate emails //TODO should have created a unique index on email column/property
  Customer.find({email:req.body.email},function (err, post) {
	if(post.length != 0) return next(new CustomError("Customer with this email already exist.", 500));
    
	Customer.create(req.body, function (err, post) {
	  if (err) return next(err);
		res.json(post);
	});
  });
  
  /**/
});

/* GET /customers/id */
router.get('/:id', function(req, res, next) {
  Customer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /customers/:id */
router.put('/:id', function(req, res, next) {
  Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /customers/:id */
router.delete('/:id', function(req, res, next) {
  Customer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
