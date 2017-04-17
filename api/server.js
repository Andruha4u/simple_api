'use strict';

var restify = require('restify');

module.exports = function create(config) {
    var server = restify
        .createServer({ name: config.name })
        .use(restify.fullResponse())
        .use(restify.bodyParser());

    var port = config.port || 3000;
    server.listen(port, function (err) {
        if (err)
            console.error(err)
        else
            console.log('App is ready at : ' + port)
    });
    return server;
};
