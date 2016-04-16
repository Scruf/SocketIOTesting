var express = require('express'),
    app = express(),
    http = require('http').Server(app)
io = require('socket.io')(http);


app.get('/', function(req, res) {
    res.sendfile('public/index.html');
});
io.on('connection', function(socket) {
    console.log("user connected")

    socket.on('disconnect',function(){
      console.log("user disconnected");
    });
    socket.on('chat message',function(msg){
      io.emit('chat message',msg);
      console.log(msg)
    });
});
http.listen(3000, function() {
    console.log("Listening on port 3000");
});
