'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var DisciplineSchema = new Schema({
    _id: { 
        type: String,
        default: uuid.v1
    },
    Name: String,
    Semester: String,
    ProviderCathedraId: {
        type: String,
        ref: 'Group'
    },
    DisciplineType: String,
    Description: String,
    LecturerId: {
        type: String,
        ref: 'User'
    },
    IsAvailable: Boolean
});

module.exports = mongoose.model('Discipline', DisciplineSchema);