const router = require('express').Router()
const { Friend } = require('../db')

router.get('/', async (req, res) => {
    try{
        const getRoot = await Friend.findAll()
        res.status(200).send(getRoot)
     }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const getRoot = await Friend.findByPk(req.params.id)
        res.status(200).send(getRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try{
        const addRoot = await Friend.create(req.body)
        res.json(addRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const deleteRoot = await Friend.destroy({where : {id : req.params.id}})
        res.json(deleteRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const updateRoot = await Friend.update(req.body, {where : {id : req.params.id}})
        res.json(updateRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router

