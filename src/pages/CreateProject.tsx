import { useState } from 'react';
import { Project } from '../types';

interface CreateProjectProps {
    onAddProject: (newProject: Project) => void;
}

const CreateProject: React.FC<CreateProjectProps> = ({ onAddProject }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [owner, setOwner] = useState('');

    const handleCreateProject = () => {
        const newProject: Project = {
            id: Date.now(),
            title,
            description,
            owner,
        };
        onAddProject(newProject);
        setTitle('');
        setDescription('');
        setOwner('');
    };

    return (
        <div className="card bg-dark text-white p-4">
            <h3>Create Project</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleCreateProject(); }}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control bg-dark text-white" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Owner</label>
                    <input type="text" className="form-control" value={owner} onChange={(e) => setOwner(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;