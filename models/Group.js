'use strict';

var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 
var GroupSchema = new Schema({
    Name : String,
    Semester : String,
    CathedraId : {
        type : Schema.Types.ObjectId,
        ref: 'Cathedra'
    }
});

module.exports = mongoose.model('Group', GroupSchema);