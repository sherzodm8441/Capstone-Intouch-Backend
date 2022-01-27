const db = require('./database')
const Friend = require('./friend')
const User = require('./user')

//Set association

User.hasMany(Friend)
Friend.belongsTo(User)


module.exports = {
    db,
    Friend,
    User
}