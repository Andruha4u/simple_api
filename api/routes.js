'use strict';

module.exports = function (routeConfig, routeFactory) {
    function registerRoutes(server) {
        server.get('/health-check', function (req, res) {
            res.send(200, "Alive");
        });
        
        createCRUDRoutes(server);
    };

    function createCRUDRoutes(server){
        var repositories = Object.keys(routeFactory);

        for(var i= 0;i< repositories.length;i++){
                var currentRepositoryName = repositories[i];
                server.put( currentRepositoryName + '/add', routeFactory[currentRepositoryName].add);
                server.del( currentRepositoryName + '/delete', routeFactory[currentRepositoryName].delete);
                server.del( currentRepositoryName + '/delete-by-id', routeFactory[currentRepositoryName].deleteById);
                server.post( currentRepositoryName + '/find', routeFactory[currentRepositoryName].find);
                server.post( currentRepositoryName + '/update', routeFactory[currentRepositoryName].update);
        }
    }

    return {
        register: registerRoutes
    };
};