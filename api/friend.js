const router = require('express').Router()
const { Friend } = require('../db')

router.get('/', async (req, res) => {
    try{
        const getFriend = await Friend.findAll()
        res.status(200).send(getFriend)
     }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const getFriend = await Friend.findByPk(req.params.id)
        res.status(200).send(getFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try{
        const addFriend = await Friend.create(req.body)
        res.json(addFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const deleteFriend = await Friend.destroy({where : {friendId : req.params.id}})
        res.json(deleteFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const updateFriend = await Friend.update(req.body, {where : {friendId : req.params.id}})
        res.json(updateFriend)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router

