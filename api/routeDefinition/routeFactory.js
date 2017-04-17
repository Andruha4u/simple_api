'use strict';

var user = require('./user.js');
var group = require('./group.js');
var discipline = require('./discipline.js');
var cathedra = require('./cathedra.js');

module.exports = function (repositoryFactory) {
    return {
        user: user(repositoryFactory.user),
        group: group(repositoryFactory.group),
        discipline: discipline(repositoryFactory.discipline),
        cathedra: cathedra(repositoryFactory.cathedra)
    }
};