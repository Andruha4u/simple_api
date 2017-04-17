'use strict';
var config = require('./config.js');
var server = require('./server.js');
var routes = require('./routes.js');

var mongoose = require('mongoose').connect(config.db_connection.url +
                                           config.db_connection.port +
                                           config.db_connection.db).connection
                                                                     .on('error', console.error.bind(console, 'connection error:'))
                                                                     .once('open', function() {
                                                                            console.log('connected to mongo!');
                                                                        });;



var repositoryFactory = require('./../lib/repositoryFactory.js');
var routeFactory = require('./routeDefinition/routeFactory.js')(repositoryFactory); 

var app = server(config);

routes(config.route,routeFactory).register(app);