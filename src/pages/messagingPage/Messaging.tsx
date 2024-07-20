import { useEffect, useState } from 'react';
import socket from '../../services/socket';
import { fetchConversations } from '../../mock/mockApi';
import ChatList from './ChatList';
import mockConversations from '../../mock/mockConversations';
import { Conversation } from '../../types';
import './Messaging.scss';

const Messaging = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);

    useEffect(() => {
        const loadConversations = async () => {
            const convos = await fetchConversations();
            setConversations(convos);
        };

        loadConversations();
    }, []);

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
            const newMessage = `You: ${message}`;
            socket.send(newMessage);
            setMessages((prev) => [...prev, newMessage]);
            setMessage('');
        }
    };

    const handleSelectConversation = (id: number) => {
        setSelectedConversationId(id);
        setMessages(mockConversations[id]);
    };

    return (
        <div className="messaging-page chat-container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <ChatList
                        conversations={conversations}
                        onSelectConversation={handleSelectConversation}
                        selectedConversationId={selectedConversationId}
                    />
                </div>
                <div className="col-md-8">
                    {selectedConversationId ? (
                        <>
                            <div className="mt-3">
                                {messages.map((msg, index) => (
                                    <p key={index} className={`text-white ${msg.startsWith('You:') ? 'text-right' : 'text-left'}`}>{msg}</p>
                                ))}
                            </div>
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
                        </>
                    ) : (
                        <p className="text-white">Select a conversation to start chatting</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Messaging;