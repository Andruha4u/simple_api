'use strict';

module.exports = function (routeConfig, routeFactory) {
    function registerRoutes(server) {
        server.get('/test', function (req, res) {
            res.send(200, "Hello from test courses");// FOR TEST
        });
        
        createCRUDRoutes(server);
    };

    function createCRUDRoutes(server){
        var repositories = Object.keys(routeFactory);

        for(var i= 0;i< repositories.length;i++){
                var currentRepositoryName = repositories[i];
                server.put( currentRepositoryName + '/add', routeFactory[currentRepositoryName].add);
                server.del( currentRepositoryName + '/delete', routeFactory[currentRepositoryName].delete);
                server.post( currentRepositoryName + '/find', routeFactory[currentRepositoryName].find);
                server.post( currentRepositoryName + '/update', routeFactory[currentRepositoryName].update);
        }
    }

    return {
        register: registerRoutes
    };
};