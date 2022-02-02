const router = require('express').Router()
const { Friend } = require('../db')

router.get('/', async (req, res) => {//returns a list of all friends
    try{
        const getFriend = await Friend.findAll()
        res.status(200).send(getFriend)
     }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => { //returns a friend row with the specified id
    try{
        const getFriend = await Friend.findByPk(req.params.id)
        res.status(200).send(getFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})
router.get('/user/:id', async (req, res) => { //returns a list of friends with the specified user id
    try{
        const getFriends = await Friend.findAll({where: {userId : req.params.id}})
        res.status(200).send(getFriends)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => { //adds a friend to the friends list
    try{
        const addFriend = await Friend.create(req.body)
        res.json(addFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => { //deletes a friend with the specified id
    try{
        const deleteFriend = await Friend.destroy({where : {friendId : req.params.id}})
        res.json(deleteFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.patch('/:id', async (req, res) => { //updates a friend with the specified id
    try{
        const updateFriend = await Friend.update(req.body, {where : {friendId : req.params.id}})
        res.json(updateFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router

