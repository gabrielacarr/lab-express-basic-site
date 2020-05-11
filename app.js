const express = require('express') // import express
const app = express() // make an instense of express // use app. to reference 
const port = 3000 // not neccessay, but easier to change if in multiple places



app.get('/', (req, res) => {
    //res.send("hello")
    res.sendFile(__dirname + '/views/home.html') // to send file 
} )
// express global variable _dirname to retreive entire path
// equivalent to using pwd on terminal to retreive entire path
// _dirname is exact path + the remaining portion of path

// get and send are methods of express
// take agruments
// have two params
// first param : the path the cilent requests, the end point
// second param : the request

// req and res are objects of information

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
}) 
// to run the express app
// listen can take a second param, to callback
// nodemon.app js in terminal
// prints: Server running on port 3000

