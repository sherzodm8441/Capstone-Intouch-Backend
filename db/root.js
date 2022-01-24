const Sequelize = require('sequelize')
const db = require('./database')

const Root = db.define('roots', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl : {
        type : Sequelize.STRING,
    }
})

module.exports = Root