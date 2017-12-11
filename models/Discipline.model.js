'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisciplineSchema = new Schema({
    Name: String,
    Semester: String,
    ProviderCathedraId: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    DisciplineType: String,
    Description: String,
    LecturerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    IsAvailable: Boolean
});

module.exports = mongoose.model('Discipline', DisciplineSchema);