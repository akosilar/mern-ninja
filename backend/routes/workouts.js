const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')
const { create } = require('../models/workoutModel')
const router = express.Router()

router.get('/', getWorkouts)
router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
    res.json({ mssg: 'delete a workout' })
})

router.patch('/:id', (req, res) => {

    res.json({ mssg: 'update a workout' })
})
module.exports = router
