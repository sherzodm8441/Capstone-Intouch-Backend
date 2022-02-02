const Sequelize = require('sequelize')
const db = require('./database')

const User = db.define('users', {
    firstName:{
        type: Sequelize.STRING, 
    },
    lastName:{
        type: Sequelize.STRING,  
    },
    password :{
        type : Sequelize.STRING,
    },
    googleId:{
        type: Sequelize.STRING,
    },
    imageUrl : {
        type : Sequelize.STRING,
    }
})

module.exports = User