'use strict';

module.exports = function (groupRepository) {

    function sendEror(res, err) {
        res.send(400, 'Group route : ' + err)
    }

    function getById(req, res, next) {
        if (req.body.id) {
            groupRepository.getByIdAsync(req.body.id)
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
            groupRepository.addAsync(req.body)
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