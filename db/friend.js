const Sequelize = require('sequelize')
const db = require('./database')

const Friend = db.define('friends', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
    },
    phone:{
        type: Sequelize.STRING,
    },
    strength:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imageUrl : {
        type : Sequelize.STRING,
    },
    lastContact: {
        type : Sequelize.DATE
    }
})

module.exports = Friend;