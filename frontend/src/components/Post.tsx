import React from 'react';
import { Post as PostType } from '../types';

const Post: React.FC<{ post: PostType }> = ({ post }) => {
    return (
        <div className="list-group-item bg-dark text-white">
            <h5 className="card-title">{post.owner}</h5>
            <p>{post.content}</p>
            <p><small>{post.timestamp}</small></p>
        </div>
    );
};

export default Post;