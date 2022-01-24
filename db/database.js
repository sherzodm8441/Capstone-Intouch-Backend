const { Sequelize } = require('sequelize');


const db = new Sequelize('postgres://postgres:postgres@localhost:5432/intouch_db',
    {logging : false}
);

module.exports = db