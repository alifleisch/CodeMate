import { useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';
import { fetchUserProfiles } from '../mock/mockApi';
import { UserProfile as UserProfileType } from '../types';

const Home = () => {
    const [profiles, setProfiles] = useState<UserProfileType[]>([]);

    useEffect(() => {
        const loadProfiles = async () => {
            const profiles = await fetchUserProfiles();
            setProfiles(profiles);
        };

        loadProfiles();
    }, []);

    const handleMatch = (id: number) => {
        console.log(`Matched with user ${id}`);
    };

    const handleNotMatch = (id: number) => {
        console.log(`Not matched with user ${id}`);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-white">Discover Users</h2>
            <div className="row">
                {profiles.map((profile) => (
                    <div key={profile.id} className="col-md-4">
                        <UserProfile profile={profile} onMatch={handleMatch} onNotMatch={handleNotMatch} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;