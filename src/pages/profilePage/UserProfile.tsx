import React from 'react';
import { UserProfile as UserProfileType } from '../../types';

interface UserProfileProps {
    profile: UserProfileType;
    onFollow: (id: number) => void;
    onMessage: (id: number) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ profile, onFollow, onMessage }) => {
    return (
        <div className="card user-card bg-dark text-white">
            <img src={profile.picture} className="card-img-top user-photo" alt={profile.name} />
            <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text"><strong>Age:</strong> {profile.age}</p>
                <p className="card-text"><strong>Level:</strong> {profile.level}</p>
                <p className="card-text"><strong>Skills:</strong> {profile.skills.join(', ')}</p>
                <button onClick={() => onFollow(profile.id)} className="btn btn-success me-2">Follow</button>
                <button onClick={() => onMessage(profile.id)} className="btn btn-success">Message</button>
            </div>
        </div>
    );
};

export default UserProfile;