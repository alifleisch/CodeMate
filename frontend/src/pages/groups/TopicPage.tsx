import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockTopics } from '@app/services/mock/mockTopics';
import { Post } from '@app/types';

const TopicPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className="container mt-4 text-white">Invalid topic ID</div>;
    }

    const topicIndex = mockTopics.findIndex(t => t.id === parseInt(id, 10));
    const topic = mockTopics[topicIndex];

    const [comments, setComments] = useState<Post[]>([...topic.comments]);
    const [newCommentContent, setNewCommentContent] = useState('');

    const handleAddComment = () => {
        if (newCommentContent.trim() === '') return;

        const newComment: Post = {
            id: Date.now(),
            author: 'Max',
            content: newCommentContent,
            owner: 'Max',
            timestamp: new Date().toISOString(),
        };

        topic.comments.push(newComment);

        setComments([...comments, newComment]);
        setNewCommentContent('');
    };

    if (!topic) {
        return <div className="container mt-4 text-white">Topic not found</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-white">{topic.title}</h2>
            <p className="text-white">{topic.description}</p>
            <ul className="list-group">
                {comments.map(comment => (
                    <li key={comment.id} className="list-group-item bg-dark text-white">
                        <strong>{comment.author}:</strong> {comment.content}
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <h5 className="text-white">Add a new comment</h5>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-dark text-white"
                        placeholder="Write your comment..."
                        value={newCommentContent}
                        onChange={(e) => setNewCommentContent(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleAddComment}>Post</button>
                </div>
            </div>
        </div>
    );
};

export default TopicPage;