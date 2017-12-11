'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisciplineSchema = new Schema({
    Name: String,
    Semester: String,
    _ProviderCathedraId: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    DisciplineType: String,
    Description: String,
    _LecturerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    IsAvailable: Boolean
});

module.exports = mongoose.model('Discipline', DisciplineSchema);