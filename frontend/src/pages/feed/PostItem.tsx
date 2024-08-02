import React from 'react';
import { Post } from '@app/types';

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="list-group-item bg-dark text-white">
            <h5 className="card-title">{post.owner}</h5>
            <p>{post.content}</p>
            <p><small>{post.timestamp}</small></p>
        </div>
    );
};

export default PostItem;