const Breaker = require('../models/breakerModel')
const asyncHandler = require('express-async-handler')


// @desc get all breakers
// @route GET /api/breakers
const getBreakers = asyncHandler(async(req, res) =>{
    const breakers = await Breaker.find();
    return res.status(200).json(breakers)
    //return res.status(200).json("Hello World")
})

// @desc get one breaker by id
// @route GET /api/breakers/:id
const getBreaker = asyncHandler(async(req, res) =>{
    try {
        // id is in req.params.id
        const breaker = await Breaker.findById(req.params.id)
        return res.status(200).json(breaker)
    } catch (error) {
        return res.status(500)
    }
})

// @desc add a breaker
// @route POST /api/breakers/
const addBreaker = asyncHandler(async(req, res) =>{
    const [question, tags] = [req.body.question, req.body.tags]
    try {
        console.log("Save new Breaker")

/*         if(req.body.question == null){
            return res.status(400)
            throw new Error('Please add a question')
        }
        if(req.body.tags == null || req.body.tags.length > 0){
            return res.status(400)
            throw new Error('Please add at least one tag')
        }   */
        const breaker = await Breaker.create({ question, tags })
        console.log("New Breaker saved: ", breaker)
        return res.status(200).json(breaker)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
})

// @desc update a breaker by id
// @route PUT /api/breakers/:id
const updateBreaker = asyncHandler(async(req, res) =>{
    try {
        // id is in req.params.id
        const breaker = await Breaker.findById(req.params.id)
        breaker.question = req.body.question
        breaker.tags = req.body.tags
        await breaker.save()
        return res.status(200).json(breaker)
    } catch (error) {
        return res.status(500)
    }
})

// @desc delete a breaker by id
// @route DELETE /api/breakers/:id
const deleteBreaker = asyncHandler(async(req, res) =>{
    try {
        // id is in req.params.id
        const breaker = await Breaker.findById(req.params.id)
        await breaker.delete()
        return res.status(200).json(req.params.id)
    } catch (error) {
        return res.status(500)
    }
})

module.exports = {getBreakers, getBreaker, addBreaker, updateBreaker, deleteBreaker}