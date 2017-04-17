'use strict';

module.exports = function (Cathedra) {

    function getByIdAsync(id) {
        return Cathedra.findOne({ _id: id });
    }

    function addAsync(cathedra) {
        return Cathedra.create(cathedra);
    }

    return {
        getByIdAsync: getByIdAsync,
        addAsync: addAsync
    }
};