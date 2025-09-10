const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Notes!")
})

router.post('/', (req, res) => {
    res.send("Helloo!")
})

module.exports = router
