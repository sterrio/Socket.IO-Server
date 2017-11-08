# Socket.IO-Server

Socket.IO server which will be used as the backend of our chat application found [here.](https://github.com/sterrio/Socket_Chat)

## How to run it
Run these terminal commands:
```
docker build -t server-chat .
docker run -d --rm --name chat server-chat
```

## How it works

The way the server functions is we listen for incoming messages and broadcast them to all our other clients on the application. We also take in the user input when the first visit the site as a username so that they have a title when chatting with other people in the application.

## Diagram of Connectivity

to be updated later..
