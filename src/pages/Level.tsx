import 'bootstrap/dist/css/bootstrap.min.css';

const Level = () => {
    const levels = [
        'Intern', 'Trainee', 'Junior', 'Mid-level', 'Senior', 'Lead',
        'Staff', 'Principal', 'Architect', 'Director', 'VP of Engineering',
        'CTO', 'Fellow', 'Tech Lead', 'Product Owner', 'DevOps Engineer',
        'Quality Assurance Engineer', 'Technical Manager', 'Program Manager',
        'Consultant'
    ];

    return (
        <div className="container mt-4">
            <h2>Developer Levels</h2>
            <ul className="list-group">
                {levels.map((level, index) => (
                    <li key={index} className="list-group-item bg-dark text-light">
                        {level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Level;