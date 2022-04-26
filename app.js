const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//define paths for expresss config

const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.get('',(req,res)=>{
    res.render('index',{
        title: 'Title',
        name: 'Myname'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Myname'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'This is some helpful text.',
        title:'Help',
        name:'Myname'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Myname',
        errorMessage:'Page not found.'
    })
})
app.listen(3000,()=>{
console.log('server is up on port 3000.')
})



