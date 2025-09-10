const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

console.log(`Node.js ${process.version}`)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: "Lektionsexempel 0.3" })
})

const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)


app.listen(PORT, () => {
    try {
        console.log(`Running on http://localhost:${PORT}`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})