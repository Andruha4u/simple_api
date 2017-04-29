'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisciplineSchema = new Schema({
    Name: String,
    Semestr : String,
    ProviderCathedraId : {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    SubscriberCathedraIds : [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    DisciplineType : String,
    Description : String,
    LecturerId  : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    StudentIds : [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Discipline', DisciplineSchema);