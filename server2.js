const express = require('express');

var app = express();

app.get('/',(req, res) =>{
  
    var obj={'Topic':'Node','Course':'CAP919'};
    res.send(obj)
});
app.listen(3000)
{
    console.log("Server is listening");
}