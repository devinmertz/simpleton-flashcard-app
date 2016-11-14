var express = require('express');
var wordListRoute = express.Router();
var mongoose = require('mongoose');
var Wordlist = require('../models/wordListModel');

wordListRoute.route('/')
  // Find word list by user
    .get(function (req, res) {
        Wordlist.find({submitter: req.user._id}, function (err, wordLists) {
            if (err) res.status(500).send(err);
            res.send(wordLists);
        })
    })
    .post(function (req, res) {
        var newWordList = new Wordlist(req.body);
        newWordList.submitter = req.user;
        newWordList.save(function (err, savedWordList) {
            if (err) res.status(500).send(err);
            res.send(savedWordList);
        })
    })


wordListRoute.route('/:wordListId')
    .get(function (req, res) {
        Wordlist.findOne({_id: req.params.wordListId, submitter: req.user._id}, function (err, wordList) {
            if (err) res.status(500).send(err);
            res.send(wordList);
        });
    })
    .put(function (req, res){
        Wordlist.findOneAndUpdate({_id: req.params.wordListId, submitter: req.user._id}, req.body, {new: true}, function(err, wordList){
            if (err) res.status(500).send(err);
            res.send(wordList);
        })
})
    .delete(function (req, res){
        Wordlist.findOneAndRemove({_id: req.params.wordListId, submitter: req.user._id}, function(err, wordList){
            if (err) res.status(500).send(err);
            res.send(wordList);
        })
})

module.exports = wordListRoute;