import React from 'react';
import { UserProfile } from '@/types';

interface UserProfileProps {
    profile: UserProfile;
    onFollow: (id: number) => void;
}

const UserProfileCard: React.FC<UserProfileProps> = ({ profile, onFollow }) => {
    return (
        <div className="card user-card bg-dark text-white">
            <img src={profile.picture} className="card-img-top user-photo" alt={profile.name} />
            <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text"><strong>Age:</strong> {profile.age}</p>
                <p className="card-text"><strong>Level:</strong> {profile.level}</p>
                <p className="card-text"><strong>Skills:</strong> {profile.skills.join(', ')}</p>
                <button onClick={() => onFollow(profile.id)} className="btn btn-success me-2">Follow</button>
            </div>
        </div>
    );
};

export default UserProfileCard;