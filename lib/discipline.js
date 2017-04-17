'use strict';

module.exports = function (Discipline) {

    function getByIdAsync(id) {
        return Discipline.findOne({ _id: id });
    }

    function addAsync(discipline) {
        return Discipline.create(discipline);
    }

    return {
        getByIdAsync: getByIdAsync,
        addAsync: addAsync
    }
};