var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);
console.log('this is a test')
io.on('connection', function (socket) {
  // store username in socket obj
  socket.username = socket.handshake.query['user']
  io.emit('server_message', socket.username + " joined the chat.");

  socket.on('disconnect', function() {
    socket.broadcast.emit('server_message', socket.username + " left the chat.");
  })

  socket.on('message', function (data) {
    socket.broadcast.emit('message_update', {user: socket.username, msg: data})
  });
});
