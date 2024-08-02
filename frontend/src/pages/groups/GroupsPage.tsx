import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';
import { mockTopics } from '@app/services/mock/mockTopics';
import { Paths } from "@app/Paths";

const Groups: React.FC = () => {
    return (
        <div className="container mt-4">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white"
            >
                Groups
            </motion.h2>
            <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="about-description"
            >
                Welcome to the groups. Here you can join different groups, discuss various topics and share your thoughts.</motion.p>
            <ul className="list-group">
                {mockTopics.map(topic => (
                    <li key={topic.id} className="list-group-item bg-dark text-white">
                        <h5>{topic.title}</h5>
                        <p>{topic.description}</p>
                        <Link to={`${Paths.Groups}/${topic.id}`} className="btn btn-primary">View Group</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Groups;