const express = require('express')
require('dotenv').config()

const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({ mssg: 'welcome to app' })
})

app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})
