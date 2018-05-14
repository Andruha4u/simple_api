'use strict';
var config = require('./config.js');
var server = require('./server.js');
var routes = require('./routes.js');
const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
const connectionString = config.db_connection.url + config.db_connection.port + config.db_connection.db
var mongoose = require('mongoose').connect(connectionString, options).then(
    () => { console.log('connected to mongo!'); },
    err => console.error.bind(console, 'connection error:')
  );
 
var repositoryFactory = require('../lib/repositoryFactory.js')(config.entities_generation);
var routeFactory = require('./routeDefinition/routeFactory.js')(repositoryFactory); 
var repositoryExtentions = require('../lib/repositoryExtentions')();

var app = server(config);

routes(config.route,routeFactory,repositoryExtentions).register(app);