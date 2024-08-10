import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
  });

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('message', msg); // Broadcast message to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

if (process.env.NODE_ENV !== 'production') {
    // If running locally, listen on port 5000
    server.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  }
  

export default server;
