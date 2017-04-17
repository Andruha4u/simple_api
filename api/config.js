'use strict';

module.exports = {
    name : 'courses',
    port : 5000,
    db_connection : {
        url: 'mongodb://localhost:',
        port: 27017,
        db: '/Courses'
    },
    route : {
        user : 'user'
    }
};