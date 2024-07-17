import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import RotatingCube from '../components/RotatingCube';

const About: React.FC = () => {
    return (
        <div className="about-page bg-dark text-white">
            <div className="about-content">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="about-title"
                >
                    Welcome to CodeMate
                </motion.h1>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="about-description"
                >
                    CodeMate is a social media app designed for IT specialists.
                    Our mission is to help you find collaborators and exciting projects
                    to work on. Whether you're a experienced developer or just starting out,
                    CodeMate has something for everyone.
                </motion.p>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="about-buttons"
                >
                    <Link to="/pages/register" className="btn btn-primary me-2">Register</Link>
                    <Link to="/pages/login" className="btn btn-secondary">Login</Link>
                </motion.div>
            </div>
            <div className="about-animation">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingCube />
                </Canvas>
            </div>
        </div>
    );
};

export default About;