import React from 'react';

interface LevelProps {
    onSelectLevel: (level: string) => void;
    selectedLevel: string;
}

const Level: React.FC<LevelProps> = ({ onSelectLevel, selectedLevel }) => {
    const levels = [
        'Intern', 'Trainee', 'Junior', 'Mid-level', 'Senior', 'Lead',
        'Staff', 'Principal', 'Architect', 'Director', 'VP of Engineering',
        'CTO', 'Fellow', 'Tech Lead', 'Product Owner', 'DevOps Engineer',
        'Quality Assurance Engineer', 'Technical Manager', 'Program Manager',
        'Consultant'
    ];

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectLevel(event.target.value);
    };

    return (
        <div className="container mt-1">
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
        </div>
    );
};

export default Level;