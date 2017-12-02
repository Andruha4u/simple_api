'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GroupSchema = new Schema({
    Name: String,
    Course: String,
    CathedraId: {
        type: Schema.Types.ObjectId,
        ref: 'Cathedra'
    },
    DisciplineSubscriptions: [{
        type: Schema.Types.ObjectId,
        ref: 'Discipline'
    }],
    DisciplineConfiguration: [{
        RequiredAmount: String,
        DisciplineType: String,
        Semester: String
    }]
});

module.exports = mongoose.model('Group', GroupSchema);