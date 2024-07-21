// import express from 'express';
// import cors from 'cors';
// import { WebSocketServer } from 'ws';

// const app = express();
// const PORT = 5176;
// const WS_PORT = 5177;

// app.use(cors());
// app.use(express.json());

// // Mock API for users
// app.get('/api/users', (req, res) => {
//     res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
// });

// // Start the Express server
// app.listen(PORT, () => {
//     console.log(`API server is running on http://localhost:${PORT}`);
// });

// // WebSocket server setup
// const wss = new WebSocketServer({ port: WS_PORT });
// wss.on('connection', (ws) => {
//     console.log('A user connected');

//     ws.on('message', (message) => {
//         console.log('Received:', message);
//         wss.clients.forEach((client) => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(message);
//             }
//         });
//     });

//     ws.on('close', () => {
//         console.log('A user disconnected');
//     });
// });

// console.log(`WebSocket server is running on ws://localhost:${WS_PORT}`);