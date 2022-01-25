const { Sequelize } = require('sequelize');

//'postgres://postgres:postgres@localhost:5432/intouch_db'

const db = new Sequelize(process.env.DATABASE_URL + "?sslmode=no-verify",
    {logging : false}
);

module.exports = db