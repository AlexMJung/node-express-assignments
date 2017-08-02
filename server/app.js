var express = require('express');

var app = express();

port = 5000;

var random = function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);

app.use(express.static('server/public'))

app.get('/*', function(req, res){
    res.send('request recieved');
});

app.get('/random', function(req, res){ 
    res.send('public/index.html')
    $('h1').text(random());

})


app.listen(port, function(){
    console.log('listening on port', port);
});//end of listening
