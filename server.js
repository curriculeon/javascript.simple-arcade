const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const publicDirectoryPath = path.join(__dirname, '../public')
//const funcToRunUponReceivingRequest = (req, res)=>{res.sendFile(__dirname + '/index.html');}

app.use(express.static(publicDirectoryPath))
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(req, res){});