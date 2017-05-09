'use strict';
var fs = require('fs');
var path = require('path');

function setEntityRepositories(entities_config) {
    var resultObj = {};
    fs.readdirSync(entities_config.full_path).reduce(function (list, file) {
        var entityPath = entities_config.project_path + file;
        var entity = require(entityPath);
        var entityRepository = require('./genericAcessor.js')(entity);
        if(file.match('.model.js')){
              resultObj[file.replace('.model.js', '').toLowerCase()] = entityRepository;
        }
    }, []);
    return resultObj;
}

module.exports = setEntityRepositories;