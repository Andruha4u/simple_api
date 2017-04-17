'use strict';

module.exports = function (routeConfig, routeFactory) {
    function registerRoutes(server) {
        server.get('/test', function (req, res) {
            res.send(200, "Hello from test courses");// FOR TEST
        });

        server.post('user/autentificate', routeFactory.user.autentificate);        
        server.post('user/add', routeFactory.user.add);
        server.post('user/get-by-id', routeFactory.user.getById);

        server.post('group/add', routeFactory.group.add);
        server.post('group/get-by-id', routeFactory.group.getById);

        server.post('discipline/add', routeFactory.discipline.add);
        server.post('discipline/get-by-id', routeFactory.discipline.getById);

        server.post('cathedra/add', routeFactory.cathedra.add);
        server.post('cathedra/get-by-id', routeFactory.cathedra.getById);
    };

    return {
        register: registerRoutes
    };
};