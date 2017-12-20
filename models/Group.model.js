'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    _id: { 
        type: String,
        default: uuid.v1
    },
    Name: String,
    Course: String,
    CathedraId: {
        type: String,
        ref: 'Cathedra'
    },
    DisciplineSubscriptions: [{
        type: String,
        ref: 'Discipline'
    }],
    DisciplineConfiguration: [{
        RequiredAmount: String,
        DisciplineType: String,
        Semester: String
    }]
});

module.exports = mongoose.model('Group', GroupSchema);