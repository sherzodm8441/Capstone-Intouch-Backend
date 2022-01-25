const router = require('express').Router()
const { Root } = require('../db')

router.get('/', async (req, res) => {
    try{
        const getRoot = await Root.findAll()
        res.status(200).send(getRoot)
     }catch(error){
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const getRoot = await Root.findByPk(req.params.id)
        res.status(200).send(getRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.post('/', async (req, res) => {
    try{
        const addRoot = await Root.create(req.body)
        res.json(addRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const deleteRoot = await Root.destroy({where : {id : req.params.id}})
        res.json(deleteRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const updateRoot = await Root.update(req.body, {where : {id : req.params.id}})
        res.json(updateRoot)
    }catch(error){
        res.status(404).send(error.message)
    }
})


module.exports = router

