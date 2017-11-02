var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);
console.log('running!')
io.on('connection', function (socket) {
  // store username in socket obj
  socket.username = socket.handshake.query['user']
  socket.emit('joined', { user: socket.username });
  socket.on('message', function (data) {
    socket.broadcast.emit('message_update', {user: socket.username, msg: data})
  });
});
