'use strict';

var user = require('./genericRoute.js');
var group = require('./genericRoute.js');
var discipline = require('./genericRoute.js');
var cathedra = require('./genericRoute.js');

module.exports = function (repositoryFactory) {
    return {
        user: user(repositoryFactory.user),
        group: group(repositoryFactory.group),
        discipline: discipline(repositoryFactory.discipline),
        cathedra: cathedra(repositoryFactory.cathedra)
    }
};