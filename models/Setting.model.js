'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;
 
var SettingSchema = new Schema({
    _id: { 
        type: String,
        default: uuid.v1
    },
    Name: String,
    Value: String,
});

module.exports = mongoose.model('Setting', SettingSchema);