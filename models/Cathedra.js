'use strict';

var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 
var CathedraSchema = new Schema({
    Name: String,
    DisciplineSubscriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'Discipline'
    }],
});

module.exports = mongoose.model('Cathedra', CathedraSchema);