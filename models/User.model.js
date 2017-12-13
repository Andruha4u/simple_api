'use strict';

var mongoose = require("mongoose");
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: { 
        type: String,
        default: uuid.v1
    },
    UserName: String,
    Email: String,
    Login: String,
    Password: String,
    PhoneNumber: String,
    Course: String,
    Roles: [],
    GroupId: {
        type: String,
        ref: 'Group'
    },
    Disciplines: [{
        _id : {
            type: String,
            ref: 'Discipline'
        },
        Locked : Boolean
    }]
});

module.exports = mongoose.model('User', UserSchema);