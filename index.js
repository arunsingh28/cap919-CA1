const express = require('express')
const path = require('path')
const lodash = require('lodash')
const PORT = process.env.PORT || 5000


// inti app 
const app = express()
// setup template engine
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))
// parser
app.use(express.urlencoded({ extended: true }))

var Booking = [];

// routing
app.get('/',(req,res)=>{
    res.render('home',{Booking})
})
app.post('/book',(req,res)=>{
    const { name, age, email } = req.body
    var detail = {name,age,email}
    Booking.push(detail)
    res.redirect('/')
})
app.get('/cancel',(req,res)=>{
    Booking.pop()
    res.redirect('/')
})
// listing port
app.listen(PORT,()=>{
    console.log(`Server runiing on PORT${PORT}`)
})