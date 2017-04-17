'use strict';

module.exports = function (disciplineRepository) {

    function sendEror(res, err) {
        res.send(400, 'Discipline route : ' + err)
    }

    function getById(req, res, next) {
        if (req.body.id) {
            disciplineRepository.getByIdAsync(req.body.id)
                .then(function (result) {
                    res.send(200, result);
                })
                .catch(function (err) {
                    sendEror(res, err);
                })
        }
        else {
            sendEror(res, 'Bad income data');
        }
    }

    function add(req, res, next) {
        if (req.body) {
            disciplineRepository.addAsync(req.body)
                .then(function (result) {
                    res.send(200, result._id);
                })
                .catch(function (err) {
                    sendEror(res, err);
                })
        }
        else {
            sendEror(res, 'Bad income data');
        }

    }

    return {
        getById: getById,
        add: add
    }
};