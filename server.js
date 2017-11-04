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
	usernames = "sfsdf" 
    if (data.includes("!users")) {
	var sockets = io.sockets.sockets;
	usernames = ""
	for(var socketId in sockets) {	
  		var socket = sockets[socketId]; //loop through and do whatever with each conne
		usernames += socket.username + " " 
	}
	usernames += "are all the users online"
	console.log(usernames)
	socket.emit('server_message', usernames);
    } else if (data.includes("!mute")) {
	console.log('hey')
    } else {
      socket.broadcast.emit('message_update', {user: socket.username, msg: data})
    }
  });
});
