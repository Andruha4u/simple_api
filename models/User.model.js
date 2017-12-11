'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    UserName: String,
    Email: String,
    Login: String,
    Password: String,
    PhoneNumber: String,
    Course: String,
    Roles: [],
    _GroupId: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    Disciplines: [{
        _id : {
            type: Schema.Types.ObjectId,
            ref: 'Discipline'
        },
        Locked : Boolean
    }]
});

module.exports = mongoose.model('User', UserSchema);