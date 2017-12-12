'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;
require('mongoose-uuid2')(mongoose);

var GroupSchema = new Schema({
    _id: { 
        type: mongoose.Types.UUID,
        default: uuid.v4
    },
    Name: String,
    Course: String,
    CathedraId: {
        type: mongoose.Types.UUID,
        ref: 'Cathedra'
    },
    DisciplineSubscriptions: [{
        type: mongoose.Types.UUID,
        ref: 'Discipline'
    }],
    DisciplineConfiguration: [{
        RequiredAmount: String,
        DisciplineType: String,
        Semester: String
    }]
});

module.exports = mongoose.model('Group', GroupSchema);