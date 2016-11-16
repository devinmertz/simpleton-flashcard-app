var express = require('express');
var categoryRoute = express.Router();
var mongoose = require('mongoose');
var Category = require('../models/categoryModel');

categoryRoute.route('/')
  .get(function (req, res) {
    Category.find({}, function (err, foundCategories) {

    })
  });