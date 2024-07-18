import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';
import { mockTopics } from '../mock/mockTopics';

const Forum: React.FC = () => {
    return (
        <div className="container mt-4">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white"
            >
                Forum
            </motion.h2>
            <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="about-description"
            >
                Welcome to the forum. Here you can discuss various topics and share your thoughts.</motion.p>
            <ul className="list-group">
                {mockTopics.map(topic => (
                    <li key={topic.id} className="list-group-item bg-dark text-white">
                        <h5>{topic.title}</h5>
                        <p>{topic.description}</p>
                        {/* <a href="pages/TopicPage.tsx"><button className="btn btn-primary">View Discussion</button></a> */}
                        <Link to={`/forum/${topic.id}`} className="btn btn-primary">View Discussion</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Forum;