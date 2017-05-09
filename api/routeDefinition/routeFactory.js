'use strict';

module.exports = function (repositoryFactory) {
    function setRouteFactory() {
        var repositories = Object.keys(repositoryFactory);
        var resultObj = {};
        for (var i = 0; i < repositories.length; i++) {
            var currentRepositoryName = repositories[i];
            resultObj[currentRepositoryName] = require('./genericRoute.js')(repositoryFactory[currentRepositoryName]);
        }
        return resultObj;
    }

    var routeFactory = setRouteFactory();
    
    return routeFactory;
};