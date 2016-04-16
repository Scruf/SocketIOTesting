var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    morgan = require('morgan'),
    body_parser = require('body-parser'),
    mongoose = require('mongoose'),
    User = require('./Users'),
    method_override = require('method-override'),
    mongoose_url =  "mongodb://ek5442:NokiaLumia920@ds033875.mlab.com:33875/movies",
    io = require('socket.io')(http);

  mongoose.connect(mongoose_url);
  var db = mongoose.connection;
  db.on('error',console.error.bind(console,'connection error'));








app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.json({
    type: 'application/vdn+json'
}));
app.use(method_override('X-HTTP-Method-Override'));
app.use(body_parser.urlencoded({
    'extended': 'true'
}));
app.get('/', function(req, res) {
  res.sendfile('public/views/index.html');
});


app.get('/register',function(req,res){
  res.sendfile();
});


app.get('/login', function(req,res){
  res.sendfile('public/views/login.html');
})

//post from the form
app.post("/login",function(req,res){


});

app.post('/register',function(req,res){
  res.write("You clickd register");
});



io.on('connection', function(socket) {
    console.log("user connected")

    socket.on('disconnect', function() {
        console.log("user disconnected");
    });
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
        console.log(msg)
    });
});
http.listen(3000, function() {
    console.log("Listening on port 3000");
});
