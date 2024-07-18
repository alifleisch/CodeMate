import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockTopics } from '../mock/mockTopics';
import { Post } from '../types';

const TopicPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div className="container mt-4 text-white">Invalid topic ID</div>;
    }

    const topicIndex = mockTopics.findIndex(t => t.id === parseInt(id, 10));
    const topic = mockTopics[topicIndex];

    const [posts, setPosts] = useState<Post[]>(topic.posts);
    const [newPostContent, setNewPostContent] = useState('');

    const handleAddPost = () => {
        if (newPostContent.trim() === '') return;

        const newPost: Post = {
            id: Date.now(),
            author: 'Current User',
            content: newPostContent,
            owner: 'Current User',
            timestamp: new Date().toISOString(),
        };

        mockTopics[topicIndex].posts.push(newPost);

        setPosts([...posts, newPost]);
        setNewPostContent('');
    };

    if (!topic) {
        return <div className="container mt-4 text-white">Topic not found</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-white">{topic.title}</h2>
            <p className="text-white">{topic.description}</p>
            <ul className="list-group">
                {posts.map(post => (
                    <li key={post.id} className="list-group-item bg-dark text-white">
                        <strong>{post.author}:</strong> {post.content}
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <h5 className="text-white">Add a new post</h5>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-dark text-white"
                        placeholder="Write your post..."
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleAddPost}>Post</button>
                </div>
            </div>
        </div>
    );
};

export default TopicPage;