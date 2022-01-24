const Sequelize = require('sequelize')
const db = require('./database')

const Friend = db.define('friends', {
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
    interactions:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imageUrl : {
        type : Sequelize.STRING,
    }
})

module.exports = Friend;