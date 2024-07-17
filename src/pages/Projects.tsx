import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/mockApi';
import { Project } from '../types';
import CreateProject from './CreateProject';

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [showCreateProject, setShowCreateProject] = useState(false);

    useEffect(() => {
        const loadProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };

        loadProjects();
    }, []);

    const handleCreateProjectClick = () => {
        setShowCreateProject((prev) => !prev);
    };

    const handleAddProject = (newProject: { title: string; description: string; owner: string }) => {
        const projectWithId = { ...newProject, id: Date.now() };
        setProjects((prev) => [...prev, projectWithId]);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-white">Projects</h2>
            <button className="btn btn-primary mb-4" onClick={handleCreateProjectClick}>
                {showCreateProject ? 'Cancel' : 'Create New Project'}
            </button>
            {showCreateProject && <CreateProject onAddProject={handleAddProject} />}
            <ul className="list-group">
                {projects.map((project) => (
                    <li key={project.id} className="list-group-item bg-dark text-white">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Owner:</strong> {project.owner}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;