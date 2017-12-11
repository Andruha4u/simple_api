'use strict';

var mongoose = require("mongoose");
var Student = require("../models/User.model");
var Group = require("../models/User.model");

module.exports = function () {

    function findStudentsByDisciplineId(disciplineId) {
        return Student.find({ 'Disciplines': { $elemMatch: { _id: disciplineId } } });
    }

    function findStudentsCountForDisciplineId() {
        return Student.aggregate([
            { $unwind: { path: "$Disciplines" } },
            {
                $group: {
                    _id: '$Disciplines._id',
                    count: { $sum: 1 }
                }
            }
        ]);
    }

    function findGroupsByDisciplineId(disciplineId) {
        return Group.find({ 'DisciplineSubscriptions': { $elemMatch: { _id: disciplineId } } });
    }

    return {
        findStudentsByDisciplineId: findStudentsByDisciplineId,
        findStudentsCountForDisciplineId: findStudentsCountForDisciplineId,
        findGroupsByDisciplineId: findGroupsByDisciplineId
    }
}