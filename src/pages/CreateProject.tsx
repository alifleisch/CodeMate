import { useState } from 'react';
import { motion } from 'framer-motion';
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
        <motion.div
            className="card bg-dark text-white p-4"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3>Create Project</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleCreateProject(); }}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control bg-dark text-white"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control bg-dark text-white"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Owner</label>
                    <input
                        type="text"
                        className="form-control bg-dark text-white"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">Create Project</button>
            </form>
        </motion.div>
    );
};

export default CreateProject;