import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const port = 5050
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let listUsers = []

io.on("connection", (socket) => {

  

  socket.on("disconnect", () =>{
    console.log(socket.id, "disconnect.")
  })
});

httpServer.listen(port, () =>{
  console.log(`server socket listening on port ${port}`)
});
