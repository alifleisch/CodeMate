import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { Post as PostType } from '../types';
import { fetchPosts } from '../mock/mockApi';
import { mockUser } from '../mock/mockUser';
import { motion } from 'framer-motion';

const PostsFeed: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [showPostForm, setShowPostForm] = useState(false);

    useEffect(() => {
        const loadPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
        };

        loadPosts();
    }, []);

    const handleAddPost = (newPost: PostType) => {
        setPosts((prev) => [...prev, newPost]);
        setShowPostForm(false);
    };

    return (
        <div className="container mt-4">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white"
            >
                Posts
            </motion.h2>
            <motion.button
                className="btn btn-primary mb-4"
                onClick={() => setShowPostForm((prev) => !prev)}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {showPostForm ? 'Cancel' : 'Create New Post'}
            </motion.button>
            {showPostForm && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <PostForm onAddPost={handleAddPost} currentUser={mockUser.name} />
                </motion.div>
            )}
            <div className="list-group">
                {posts.map((post) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Post post={post} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PostsFeed;