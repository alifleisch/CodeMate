import { useEffect, useState } from 'react';
import UserProfile from './profilePage/UserProfile';
import { fetchUserProfiles } from '../mock/mockApi';
import { UserProfile as UserProfileType } from '../types';
import { motion } from 'framer-motion';

const Home = () => {
    const [profiles, setProfiles] = useState<UserProfileType[]>([]);

    useEffect(() => {
        const loadProfiles = async () => {
            const profiles = await fetchUserProfiles();
            setProfiles(profiles);
        };

        loadProfiles();
    }, []);

    const handleFollow = (id: number) => {
        console.log(`Started following user ${id}`);
    };

    const handleMessage = (id: number) => {
        console.log(`Opened conversation with user ${id}`);
    };

    return (
        <div className="container mt-4">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white"
            >
                Discover Users
            </motion.h2>
            <div className="row">
                {profiles.map((profile) => (
                    <motion.div
                        key={profile.id}
                        className="col-md-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <UserProfile
                            profile={profile}
                            onFollow={handleFollow}
                            onMessage={handleMessage}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Home;