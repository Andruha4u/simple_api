'use strict';

var mongoose = require("mongoose");

module.exports = function (Entity) {

    function findAsync() {
        var query = { $or: optionList };
        var querySkip = skip ? skip : 0;
        if (take) {
            return Entity.find(query).limit(take).skip(querySkip);
        }
        else {
            return Entity.find(query).skip(querySkip);
        }
    }
}

// TODO : Get Students by DesciplineId
// TODO : GEt Groups by DesciplineId