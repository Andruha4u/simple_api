'use strict';

var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 
var UserSchema = new Schema({
    UserName : String,
    Email : String,
    Login : String,
    Password : String,
    PhoneNumber : String,
    Roles : [],
    GroupId :{
        type : Schema.Types.ObjectId,
        ref: 'Group'
    }
});

module.exports = mongoose.model('User', UserSchema);