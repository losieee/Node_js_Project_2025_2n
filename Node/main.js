let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/about', function(req, res){
    res.send('Player');
});

app.listen(3000, function(){

    console.log('listening on port 3000');
});


console.log("Server running at http://127.0.0.1:3000/about");