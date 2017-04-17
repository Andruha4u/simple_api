'use strict';

var userEntity = require('./../models/User.js');
var groupEntity = require('./../models/Group.js');
var disciplineEntity = require('./../models/Discipline.js');
var cathedraEntity = require('./../models/Cathedra.js');

var userRepository = require('./user.js')(userEntity);
var groupRepository = require('./group.js')(groupEntity);
var disciplineRepository = require('./discipline.js')(disciplineEntity);
var cathedraRepository = require('./cathedra.js')(cathedraEntity);



module.exports = {
    user: userRepository,
    group: groupRepository,
    discipline: disciplineRepository,
    cathedra: cathedraRepository
}