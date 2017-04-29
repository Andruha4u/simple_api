'use strict';

var userEntity = require('./../models/User.js');
var groupEntity = require('./../models/Group.js');
var disciplineEntity = require('./../models/Discipline.js');
var cathedraEntity = require('./../models/Cathedra.js');

var userRepository = require('./genericAcessor.js')(userEntity);
var groupRepository = require('./genericAcessor.js')(groupEntity);
var disciplineRepository = require('./genericAcessor.js')(disciplineEntity);
var cathedraRepository = require('./genericAcessor.js')(cathedraEntity);



module.exports = {
    user: userRepository,
    group: groupRepository,
    discipline: disciplineRepository,
    cathedra: cathedraRepository
}