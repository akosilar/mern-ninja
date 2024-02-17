const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const uri = process.env.MONG_URI


const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

mongoose.connect(uri)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


