var express = require('express');

var app = express();

port = 5000;


app.use(express.static('server/public'))

app.get('/*', function(req, res){
    res.send('request recieved');
});

app.get('/random', function(req, res){ 
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}});


app.listen(port, function(){
    console.log('listening on port', port);
});//end of listening

