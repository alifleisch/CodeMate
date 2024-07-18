import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LevelProps {
    onSelectLevel: (level: string) => void;
}

const Level: React.FC<LevelProps> = ({ onSelectLevel }) => {
    const levels = [
        'Intern', 'Trainee', 'Junior', 'Mid-level', 'Senior', 'Lead',
        'Staff', 'Principal', 'Architect', 'Director', 'VP of Engineering',
        'CTO', 'Fellow', 'Tech Lead', 'Product Owner', 'DevOps Engineer',
        'Quality Assurance Engineer', 'Technical Manager', 'Program Manager',
        'Consultant'
    ];

    const [selectedLevel, setSelectedLevel] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLevel(event.target.value);
    };

    const handleAddLevel = () => {
        if (selectedLevel) {
            onSelectLevel(selectedLevel);
            setSelectedLevel('');
        }
    };

    return (
        <div className="container mt-4">
            <h2>Developer Level</h2>
            <div className="mb-3">
                <select
                    value={selectedLevel}
                    onChange={handleSelectChange}
                    className="form-select bg-dark text-light"
                >
                    <option value="" disabled>Select a level</option>
                    {levels.map((level, index) => (
                        <option key={index} value={level}>{level}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleAddLevel} className="btn btn-primary">
                Set Level
            </button>
        </div>
    );
};

export default Level;