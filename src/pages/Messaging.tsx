import { useEffect, useState } from 'react';
import socket from '../services/socket';

const Messaging = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        socket.onmessage = (event) => {
            const msg = event.data;
            setMessages((prev) => [...prev, msg]);
        };

        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = () => {
        if (message) {
            socket.send(message);
            setMessage('');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-white">Messaging</h2>
            <div className="form-group mb-3">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control bg-dark text-white"
                    placeholder="Type your message"
                />
            </div>
            <button onClick={sendMessage} className="btn btn-primary submit-button">Send</button>
            <div className="mt-3">
                {messages.map((msg, index) => (
                    <p key={index} className="text-white">{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default Messaging;