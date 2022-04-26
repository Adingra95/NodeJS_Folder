const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const app = express()

const port = process.en.PORT || 3000

app.use((req, res,next)=>{
    console.log('Running')
 next()   
})
hbs.registerHelper(__dirname + '/view')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/'))

hbs.registerHelper('YR',()=>{
    return new Data().getFullYear()
})
hbs.registerHelper('Capt',(text)=>{
    return text.toUppercase()
})
hbs.registerHelper('validate',(text)=>{
    return((text.length>5) && (text=='Hello'))
})

app.get("/",(req,res)=>{
    res.render('home.hbs',{
        pageTitle:'Home Page',
        WelcomeMessage:'Welcome to my website',
        myCode:'Hello'
    })
})

