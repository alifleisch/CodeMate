import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import CreateProject from './CreateProject';

interface ProjectsProps {
    initialProjects: Project[];
    onAddProject: (newProject: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ initialProjects, onAddProject }) => {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [showCreateProject, setShowCreateProject] = useState(false);

    const handleCreateProjectClick = () => {
        setShowCreateProject((prev) => !prev);
    };

    const handleAddProject = (newProject: Project) => {
        setProjects((prev) => [...prev, newProject]);
        onAddProject(newProject);
    };

    return (
        <div className="container mt-4">
            <motion.h5
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white"
            >
                My Projects
            </motion.h5>
            <button className="btn btn-primary mb-4" onClick={handleCreateProjectClick}>
                {showCreateProject ? 'Cancel' : 'Create New Project'}
            </button>
            {showCreateProject && <CreateProject onAddProject={handleAddProject} />}
            <ul className="projects-list list-group">
                {projects.map((project) => (
                    <motion.li
                        key={project.id}
                        className="projects-list-item list-group-item bg-dark text-white"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h5>{project.title}</h5>
                        <p>{project.description}</p>
                        <p><strong>Owner:</strong> {project.owner}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;