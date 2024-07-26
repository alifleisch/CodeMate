import React, { useState } from 'react';
import { Post as PostType } from '../../types';
import { motion } from 'framer-motion';

interface PostFormProps {
    onAddPost: (newPost: PostType) => void;
    currentUser: string;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost, currentUser }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost: PostType = {
            id: Date.now(),
            content,
            author: currentUser,
            owner: currentUser,
            timestamp: new Date().toISOString(),
        };
        onAddPost(newPost);
        setContent('');
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control bg-dark text-white"
                placeholder="Write your post..."
                required
            />
            <button type="submit" className="btn btn-success mt-2">Post</button>
        </motion.form>
    );
};

export default PostForm;