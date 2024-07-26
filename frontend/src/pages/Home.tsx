import React from 'react';
import About from './about/AboutPage';
import PostsFeed from '../pages/feed/PostsFeed';

const Home: React.FC = () => {
    const isLoggedIn = false;

    return (
        <div>
            {isLoggedIn ? <PostsFeed /> : <About />}
        </div>
    );
};

export default Home;