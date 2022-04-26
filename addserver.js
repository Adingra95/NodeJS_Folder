const express = require('express');

var app = express();

app.get('/',(req, res) =>{
    res.send('<h1>Expressjs started!</h1>');
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});

app.get('/bad',(req,res)=>{
    res.send({errorMessage:'Unable to handle request'});
});
app.listen(3000)
{
    console.log("Server is listening");
} 