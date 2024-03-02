
const express = require("express")
const notes = require("./data/notes")
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.get("/",(req, res)=>{
    res.send("API is running")
})

app.get('/api/node',(req, res)=>{
    res.json(notes)
})

app.get('/api/node/:id',(req, res)=>{
    // res.json(notes)
    const note = notes.find((n)=>n._id === req.params.id)
    console.log(req.params);
    res.send(note)
    
})


const PORT = process.env.PORT || 5000
// AbortController.get

app.listen(5000, console.log(`Server stated on Port ${PORT}`))