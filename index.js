// import express
//import cors
//import mongoose

const express = require('express') //import exess
const cors = require('cors') //import cors
const mongoose = require('mongoose') // import 
require('dotenv/config')// importing dotenv library to use variable

const app = express()        //creating app as express
app.use(express.json())      // use express and parse everything into json
//matt credit // express.jason

// connect mongoose
mongoose
.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()  => console.log('connect to mongo'))
.catch(err => console.log(err))


//first get route
app.get('/', (req, res) => {
    res.send('Hello Class')

})


app.listen(5000, (req, res) => {
    console.log('listening on port 5000')

})