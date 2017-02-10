var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var str=[];
var loginlist = {};
// console.log("Server has started.");
io.on('connection',function(ws){
	console.log('1');
	ws.on('message',function(message){
		console.log(message);
		str = message;
		io.emit('message',message);
	})
	ws.on('login',function(id){
		console.log('用户登录');
		io.send(str);
		// io.send('logintype','1');
	})
	ws.on('clear',function(){
		str = '';
		io.emit('message','[]');
	})

})

http.listen(3000, function(){
	console.log('listening on *:3000');
});