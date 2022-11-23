const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('https://mongodb/localhost/271027')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/index', require('./routes/api'))
app.use(express.urlencoded({extended:true}))

app.listen(5000,()=> {
    console.log('app started');
})