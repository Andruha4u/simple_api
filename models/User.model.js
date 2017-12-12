'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;
require('mongoose-uuid2')(mongoose);

var UserSchema = new Schema({
    _id: { 
        type: mongoose.Types.UUID,
        default: uuid.v4
    },
    UserName: String,
    Email: String,
    Login: String,
    Password: String,
    PhoneNumber: String,
    Course: String,
    Roles: [],
    GroupId: {
        type: mongoose.Types.UUID,
        ref: 'Group'
    },
    Disciplines: [{
        _id : {
            type: mongoose.Types.UUID,
            ref: 'Discipline'
        },
        Locked : Boolean
    }]
});

module.exports = mongoose.model('User', UserSchema);