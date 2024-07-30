import { useEffect, useState } from 'react';
import { fetchUserProfiles } from '@services/mock/mockApi';
import { UserProfile } from '@/types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import UserProfileCard from './UserProfileCard';

const DiscoverUsers = () => {
    const [profiles, setProfiles] = useState<UserProfile[]>([]);

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
                        <Link to={`/profile/${profile.id}`} style={{ textDecoration: 'none' }}>
                            <UserProfileCard
                                profile={profile}
                                onFollow={handleFollow}
                            />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverUsers;