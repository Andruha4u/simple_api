'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;
 
var CathedraSchema = new Schema({
    _id: { 
        type: String,
        default: uuid.v1
    },
    Name: String
});

module.exports = mongoose.model('Cathedra', CathedraSchema);