'use strict';

module.exports = function (Group) {

    function getByIdAsync(id){
      return  Group.findOne({_id: id});
    }

    function addAsync(group){
        return Group.create(group);
    }

    return {
        getByIdAsync: getByIdAsync,
        addAsync : addAsync
    }
};