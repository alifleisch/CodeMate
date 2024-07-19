import React, { useState } from 'react';
import { mockUser } from '../../mock/mockUser';
import Skills from './Skills';
import Level from './Level';
import Projects from '../projectsPage/Projects';
import { Project } from '../../types';
import './Profile.scss';

const Profile: React.FC = () => {
    const [user, setUser] = useState(mockUser);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(mockUser);

    const handleAddProject = (newProject: Project) => {
        setUser((prevUser) => ({
            ...prevUser,
            projects: [...prevUser.projects, newProject],
        }));
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            setEditedUser(user);
        }
    };

    const handleSave = () => {
        setUser(editedUser);
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleLevelChange = (level: string) => {
        setEditedUser((prevUser) => ({
            ...prevUser,
            level: level,
        }));
    };

    return (
        <div className="profile-page container mt-4">
            <div className="profile-card bg-dark">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={user.picture} alt={user.name} className="img-profile" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body m-4">
                            <h5 className="card-title mb-4">
                                <button
                                    onClick={handleEditToggle}
                                    className="btn btn-light btn-sm float-end m4"
                                    style={{ borderRadius: '50%' }}
                                >
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                                {isEditing ? (
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={editedUser.name}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                ) : (
                                    editedUser.name
                                )}
                            </h5>
                            <p className="card-text">
                                <strong>Age:</strong>
                                {isEditing ? (
                                    <div className="input-group d-flex justify-content-center">
                                        <input
                                            type="number"
                                            name="age"
                                            value={editedUser.age}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                ) : (
                                    ` ${editedUser.age}`
                                )}
                            </p>
                            <p className="card-text">
                                <strong>Level:</strong>
                                {isEditing ? (
                                    <div className="input-group">
                                        <Level
                                            selectedLevel={editedUser.level}
                                            onSelectLevel={handleLevelChange}
                                        />
                                    </div>
                                ) : (
                                    ` ${user.level}`
                                )}
                            </p>
                            <p className="card-text">
                                <strong>Skills:</strong>
                                {isEditing ? (
                                    <div className="input-group">
                                        <Skills onSelectSkill={(skill) => setEditedUser((prevUser) => ({
                                            ...prevUser,
                                            skills: [...prevUser.skills, skill]
                                        }))} />
                                    </div>
                                ) : (
                                    ` ${user.skills.join(', ')}`
                                )}
                            </p>
                            <p className="card-text">
                                <strong>Bio:</strong>
                                {isEditing ? (
                                    <div className="input-group d-flex justify-content-center">
                                        <input
                                            type="text"
                                            name="bio"
                                            value={editedUser.bio}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                ) : (
                                    ` ${editedUser.bio}`
                                )}
                            </p>
                            <p className="card-text">
                                <strong>Email:</strong>
                                {isEditing ? (
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={editedUser.email}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                ) : (
                                    ` ${editedUser.email}`
                                )}
                            </p>
                            <p className="card-text">
                                <strong>Location:</strong>
                                {isEditing ? (
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="location"
                                            value={editedUser.location}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>
                                ) : (
                                    ` ${editedUser.location}`
                                )}
                            </p>
                            {isEditing && (
                                <button
                                    onClick={handleSave}
                                    className="btn btn-primary mb-4"
                                >
                                    Save
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Projects initialProjects={user.projects} onAddProject={handleAddProject} />
        </div>
    );
};

export default Profile;