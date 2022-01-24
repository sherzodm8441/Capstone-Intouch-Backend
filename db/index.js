const db = require('./database')
const Friend = require('./friend')
const Root = require('./root')

//Set association

Root.hasMany(Friend)
Friend.belongsTo(Root)


module.exports = {
    db,
    Friend,
    Root
}