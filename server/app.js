var express = require('express');

var app = express();

port = 5000;

app.get('/*', function(req, res){
    res.send('request recieved');
});

app.use(express.static('public'))

app.listen(port, function(){
    console.log('listening on port', port);
});

