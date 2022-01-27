const { Sequelize } = require('sequelize');

//'postgres://postgres:postgres@localhost:5432/intouch_db'

//process.env.DATABASE_URL + "?sslmode=no-verify"

const db = new Sequelize('postgres://postgres:postgres@localhost:5432/intouch_db',
    {logging : false}
);

module.exports = db