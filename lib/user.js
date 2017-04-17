'use strict';

var mongoose = require("mongoose");

module.exports = function (User) {

    function authenticateAsync(name, password) {
        var query = {
            UserName: name,
            Password: password
        };
        return User.findOne(query);
    }

    function addAsync(user){
        console.log(User);
        return User.create(user);
    }

    function getByIdAsync(id){
        console.log(id);
       return User.findOne({_id: id});
    }

    return {
        authenticateAsync: authenticateAsync,
        addAsync : addAsync,
        getByIdAsync: getByIdAsync
    }
};