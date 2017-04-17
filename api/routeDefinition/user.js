'use strict';

module.exports = function (userRepository) {

    function sendEror(res, err) {
        res.send(400,'User route : ' +  err)
    }

    function autentificate(req, res, next) {
        if (req.body && req.name && req.password) {
            userRepository.authenticateAsync(req.name, req.password)
                .then(function (result) {
                    res.send(200, result._id);
                })
                .catch(function (err) {
                    sendEror(res, err);
                });
        }
        else {
            sendEror(res, 'Bad income data');
        }
    }

    function add(req, res, next) {
        if (req.body) {
            userRepository.addAsync(req.body)
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

    function getById(req, res, next) {
        if (req.body.id) {
            userRepository.getByIdAsync(req.body.id)
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

    return {
        autentificate: autentificate,
        add: add,
        getById: getById
    }
}