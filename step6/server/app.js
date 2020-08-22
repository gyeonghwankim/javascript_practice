const express = require('express');
const fs = require('fs');
const app = express();
const data = require('./data.json');


const server = app.listen(8090, function() {
    console.log("Express server has started on port 8090");
});

app.get('/', (req, res) => {
    fs.readFile('./html/log.html', function(err, data){
        if(err){
            throw err;
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
});

app.get('/data', (req, res) => {
    res.send(data);
});

