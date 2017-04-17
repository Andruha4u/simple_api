'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DisciplineSchema = new Schema({
    Name: String,
    Semestr : String,
    ProviderCathedraId: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    ReferenceCathedraIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }]
});

module.exports = mongoose.model('Discipline', DisciplineSchema);