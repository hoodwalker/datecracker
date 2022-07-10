const express = require('express')
const router = express.Router()

const { getBreakers, getBreaker, addBreaker, updateBreaker, deleteBreaker } = require('../controllers/breakerController')

// Get all breakers
router.get('/', getBreakers)
// Get one breaker by id
router.get('/:id', getBreaker)
// Add a breakers
router.post('/', addBreaker)
// Update a breakers
router.put('/:id', updateBreaker)
// Delete a breaker
router.delete('/:id', deleteBreaker)

module.exports = router
