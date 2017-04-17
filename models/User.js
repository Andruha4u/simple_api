'use strict';

var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 
var UserSchema = new Schema({
    Name : String,
    Email : String,
    Password : String,
    SecurityStamp : String,
    PhoneNumber : String,
    LockoutEndDateUtc : Date,
    LockoutEnabled : Boolean,
    AccessFailedCount : Number,
    Roles : [],
    GroupIds :[{
        type : Schema.Types.ObjectId,
        ref: 'Group'
    }]
});

module.exports = mongoose.model('User', UserSchema);