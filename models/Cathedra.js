'use strict';

var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 
var CathedraSchema = new Schema({
    Name: String
});

module.exports = mongoose.model('Cathedra', CathedraSchema);