const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('users', {
    firstName:{
        type: Sequelize.STRING,
        
    },
    lastName:{
        type: Sequelize.STRING,
        
    },
    googleId:{
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl : {
        type : Sequelize.STRING,
    }
})

module.exports = User