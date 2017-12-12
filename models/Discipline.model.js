'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;
require('mongoose-uuid2')(mongoose);

var DisciplineSchema = new Schema({
    _id: { 
        type: mongoose.Types.UUID,
        default: uuid.v4
    },
    Name: String,
    Semester: String,
    ProviderCathedraId: {
        type: mongoose.Types.UUID,
        ref: 'Group'
    },
    DisciplineType: String,
    Description: String,
    LecturerId: {
        type: mongoose.Types.UUID,
        ref: 'User'
    },
    IsAvailable: Boolean
});

module.exports = mongoose.model('Discipline', DisciplineSchema);