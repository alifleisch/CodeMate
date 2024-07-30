import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { Post as PostType } from '@/types';
import { fetchPosts } from '@services/mock/mockApi';
import { mockUser } from '@services/mock/mockUser';
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {showPostForm ? 'Cancel' : 'Create New Post'}
            </motion.button>
            {showPostForm && (
                <div>
                    <PostForm onAddPost={handleAddPost} currentUser={mockUser.name} />
                </div>
            )}
            <div className="list-group">
                {posts.map((post) => (
                    <div key={post.id}>
                        <PostItem post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsFeed;