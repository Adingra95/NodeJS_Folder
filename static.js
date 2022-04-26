const path = require('path');
const express = require('express')

console.log(__dirname);
console.log(__filename);


console.log(path.join(__dirname,'../../'));
console.log(path.join(__dirname,'../resource'));

const app = express()

app.listen(3000,() => {
console.log('Server is up on port 3000.')
})