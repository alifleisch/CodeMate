import React, { useState } from 'react';
import { mockUser } from '../../mock/mockUser';
import Skills from './Skills';
import Level from './Level';
import Projects from '../projectsPage/Projects';
import { Project } from '../../types';

const Profile: React.FC = () => {
    const [user, setUser] = useState(mockUser);

    const handleAddSkill = (skill: string) => {
        if (!user.skills.includes(skill)) {
            setUser((prevUser) => ({
                ...prevUser,
                skills: [...prevUser.skills, skill],
            }));
        }
    };

    const handleSetLevel = (level: string) => {
        setUser((prevUser) => ({
            ...prevUser,
            level: level,
        }));
    };

    const handleAddProject = (newProject: Project) => {
        setUser((prevUser) => ({
            ...prevUser,
            projects: [...prevUser.projects, newProject],
        }));
    };

    return (
        <div className="container mt-4">
            <div className="card bg-dark text-white">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={user.picture} alt={user.name} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text"><strong>Age:</strong> {user.age}</p>
                            <p className="card-text"><strong>Skills:</strong> {user.skills.join(', ')}</p>
                            <p className="card-text"><strong>Level:</strong> {user.level}</p>
                            <p className="card-text"><strong>Bio:</strong> {user.bio}</p>
                            <p className="card-text"><strong>Email:</strong> {user.email}</p>
                            <p className="card-text"><strong>Location:</strong> {user.location}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Skills onSelectSkill={handleAddSkill} />
            <Level onSelectLevel={handleSetLevel} />
            <Projects initialProjects={user.projects} onAddProject={handleAddProject} />
        </div>
    );
};

export default Profile;