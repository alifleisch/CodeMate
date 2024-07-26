import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserProfiles } from '../../services/mock/mockApi';
import { UserProfile as UserProfileType } from '../../types';
import './Profile.scss';

const UserProfileView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<UserProfileType | null>(null);

    useEffect(() => {
        const loadProfile = async () => {
            const profiles = await fetchUserProfiles();
            const userProfile = profiles.find((profile) => profile.id === Number(id));
            setProfile(userProfile || null);
        };

        loadProfile();
    }, [id]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    const handleFollow = () => {
        console.log(`Started following user ${profile.id}`);
    };

    const handleMessage = () => {
        console.log(`Opened conversation with user ${profile.id}`);
    };

    return (
        <div className="profile-page container mt-4">
            <div className="profile-card bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={profile.picture} alt={profile.name} className="img-profile" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body m-4">
                            <h5 className="card-title mb-4">
                                {profile.name}
                            </h5>
                            <p className="card-text"><strong>Age:</strong> {profile.age}</p>
                            <p className="card-text"><strong>Level:</strong> {profile.level}</p>
                            <p className="card-text"><strong>Skills:</strong> {profile.skills.join(', ')}</p>
                            <p className="card-text"><strong>Bio:</strong> {profile.bio}</p>
                            <p className="card-text"><strong>Location:</strong> {profile.location}</p>
                            <button onClick={handleFollow} className="btn btn-success me-2">Follow</button>
                            <button onClick={handleMessage} className="btn btn-success">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileView;