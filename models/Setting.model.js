'use strict';

var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 
var SettingSchema = new Schema({
    Name: String,
    Value: String,
});

module.exports = mongoose.model('Setting', SettingSchema);