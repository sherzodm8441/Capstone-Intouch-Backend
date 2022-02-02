const router = require('express').Router()
const { User } = require('../db')

router.get('/', async (req, res) => { //returns a lsit of all users
  
        try{
            const getUser = await User.findAll()
            res.status(200).send(getUser)
         }catch(error){
            res.status(404).send(error.message)
        }
    
    
})

router.get('/:id', async (req, res) => { //returns a user with the specified id
    try{
        const getUser = await User.findByPk(req.params.id)
        res.status(200).send(getUser)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => { //adds a user to the list
    try{
        const addUser = await User.create(req.body)
        res.json(addUser)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => { //deletes a user with the specified id
    try{
        const deleteUser = await User.destroy({where : {id : req.params.id}})
        res.json(deleteUser)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.patch('/:id', async (req, res) => { //updates a user with the specified id
    try{
        const updateUser = await User.update(req.body, {where : {id : req.params.id}})
        res.json(updateUser)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router

