'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;
require('mongoose-uuid2')(mongoose);
 
var CathedraSchema = new Schema({
    _id: { 
        type: mongoose.Types.UUID,
        default: uuid.v4
    },
    Name: String
});

module.exports = mongoose.model('Cathedra', CathedraSchema);