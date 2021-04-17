
var express = require('express');
var router = express.Router();

var Feedback = require('../models/feedback');

router.post('/feedback', function (req, res, next) {
    addToDB(req, res);
  });
  
  
  async function addToDB(req, res) {
  
    var feedback = new Feedback({
      email: req.body.email,
      name: req.body.name,
      messsage: req.body.message
  
    });
  
    try {
      doc = await feedback.save();
      return res.status(201).json(doc);
    }
    catch (err) {
      return res.status(501).json(err);
    }
  }
  module.exports = router;
