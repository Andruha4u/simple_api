'use strict';

module.exports = {
    name : 'courses',
    port : 5000,
    db_connection : {
        url: 'mongodb://localhost:',
        port: 27017,
        db: '/Courses'
    },
    entities_generation : {
        full_path : './models/',
        project_path : './../models/'
    }
};