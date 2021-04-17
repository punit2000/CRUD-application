var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    email : {type:String, require:true},
    name: {type:String, require:true},
    message:{type:String, require:true},
   
});
module.exports = mongoose.model('Feedback',schema);