'use strict';

module.exports = function (cathedraRepository) {

    function sendEror(res, err) {
        res.send(400, 'Cathedra route : ' + err)
    }

    function getById(req, res, next) {
        if (req.body.id) {
            cathedraRepository.getByIdAsync(req.body.id)
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
            cathedraRepository.addAsync(req.body)
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