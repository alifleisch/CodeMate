import React from 'react';
import { Chat } from '@app/types';

interface ChatListProps {
    chats: Chat[];
    onSelectConversation: (id: number) => void;
    selectedConversationId: number | null;
}

const ChatList: React.FC<ChatListProps> = ({ chats: conversations, onSelectConversation, selectedConversationId }) => {
    return (
        <div className="chat-list">
            {conversations.map((conversation) => (
                <div
                    key={conversation.id}
                    className={`chat-item ${conversation.id === selectedConversationId ? 'chat-item-selected' : ''}`}
                    onClick={() => onSelectConversation(conversation.id)}
                >
                    <img src={conversation.user.picture} alt={conversation.user.name} className="chat-item-img" />
                    <div className="chat-item-info">
                        <h5>{conversation.user.name}</h5>
                        <p>{conversation.messages[conversation.messages.length - 1]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;