const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://localhost:27017/Sports");
mongoose.Promise=global.Promise
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/api', require('./routes/api'))
app.use(express.urlencoded({extended:true}))

app.listen(5000,()=> {
    console.log('app started');
})