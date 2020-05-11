const express = require('express') // import express
const app = express() // make an instense of express // use app. to reference 
const port = 3000 // not neccessay, but easier to change if in multiple places



app.get('/', (req, res) => {
    res.send("hello")
    // res.sendFile(__dirname + '/views/home.html')
} )

app.listen(port) // to run the express app