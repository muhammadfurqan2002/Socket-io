const express=require('express');
const http=require('http');
const path=require('path');
const app=express();

const server=http.createServer(app);
const {Server}=require('socket.io');

const io=new Server(server);

io.on("connection",(socket)=>{
    socket.on("chat message",(msg)=>{
        socket.emit("chat message",msg);
    });
});


app.use(express.static(path.resolve("./public")));



app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html");
});


server.listen(8080,()=>{
    console.log("Server Started");
});