'use strict';

var mongoose = require("mongoose");

module.exports = function (Entity) {

    function findAsync(optionList, skip, take) {
        var query = { $or: optionList };
        var querySkip = skip ? skip : 0;
        if (take) {
            return Entity.find(query).limit(take).skip(querySkip);
        }
        else {
            return Entity.find(query).skip(querySkip);
        }
    }

    function addAsync(entity) {
        return Entity.create(entity);
    }

    function deleteAsync(entity) {
        return Entity.remove(entity);
    }

    function deleteByIdAsync(id) {
        return Entity.remove({_id : id});
    }

    function updateAsync(updateOption) {
        return Entity.update({ _id: updateOption.id }, { $set: updateOption.update });
    }

    return {
        addAsync: addAsync,
        deleteAsync: deleteAsync,
        findAsync: findAsync,
        updateAsync: updateAsync,
        deleteByIdAsync: deleteByIdAsync
    }
};