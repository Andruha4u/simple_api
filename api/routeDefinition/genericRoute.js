'use strict';

module.exports = function (entityRepository) {

    function sendEror(res, err) {
        res.send(400, 'Group route : ' + err)
    }

    function resultProcessor(asyncResult, res, next) {
        asyncResult.then(function (result) {
            res.send(200, result);
        }).catch(function (err) {
            sendEror(res, err);
        });
    }

    function findAction(req, res, next) {
        if (req.body && req.body.optionList) {
            resultProcessor(entityRepository.findAsync(req.body.optionList,
                                                       req.body.skip,
                                                        req.body.take),
                            res,
                            next);
        }
        else {
            sendEror(res, 'Bad income data');
        }
    }

    function addAction(req, res, next) {
        if (req.body) {
            resultProcessor(entityRepository.addAsync(req.body), res, next);
        }
        else {
            sendEror(res, 'Bad income data');
        }
    }

    function deleteAction(req, res, next) {
        if (req.body) {
            resultProcessor(entityRepository.deleteAsync(req.body), res, next);
        }
        else {
            sendEror(res, 'Bad income data');
        }
    }

    function updateAction(req, res, next) {
        if (req.body.id && req.body.update) {
            resultProcessor(entityRepository.updateAsync(req.body), res, next);
        }
        else {
            sendEror(res, 'Bad income data');
        }
    }


    return {
        add: addAction,
        find: findAction,
        delete: deleteAction,
        update: updateAction
    }
};