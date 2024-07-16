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
        <div>
            <h2>Messaging</h2>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default Messaging;