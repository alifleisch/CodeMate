import React, { useState } from 'react';

interface SkillsProps {
    selectedSkills: string[];
    onSelectSkill: (skill: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ selectedSkills, onSelectSkill }) => {
    const skills = [
        'JavaScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express', 'Next.js', 'Nest.js', 'React Native',
        'Java', 'Spring', 'Hibernate', 'JavaServer Faces (JSF)', 'Grails', 'Vaadin',
        'JDBC', 'JPA', 'Kotlin',
        'Python', 'Django', 'Flask', 'FastAPI', 'Pyramid', 'C', 'C++',
        'Ruby', 'Ruby on Rails', 'Sinatra', 'PHP', 'Laravel', 'Symfony', 'CodeIgniter',
        'C#', 'ASP.NET', 'Entity Framework', 'Blazor', 'Go', 'Gin', 'Beego',
        'TensorFlow', 'Apache Spark', 'VB.NET', 'R', 'SQL', 'PL/SQL',
        'Swift', 'Perl', 'Assembly language', 'MATLAB', 'Classic Visual Basic',
        'Apache Groovy', 'Objective-C', 'Rust', 'SAS', 'Scratch', 'D', 'Dart', 'Flutter',
        'Logo', 'Delphi', 'COBOL', 'OpenEdge ABL', 'Julia', 'ABAP', 'Scala',
        'Transact-SQL', 'Scheme', 'Prolog', 'Ada', 'Lisp', 'Apex', 'Lua', 'Fortran',
        'Haskell', 'Hack', 'VBScript', 'Visual FoxPro', 'TypeScript', 'AWK',
        'ActionScript', 'Tcl', 'Smalltalk', 'ABC', 'Alice', 'APL', 'AutoLISP',
        'Bash', 'bc', 'Bourne shell', 'C shell', 'Clipper', 'Clojure', 'CoffeeScript',
        'Common Lisp', 'Crystal', 'cT', 'Elixir', 'Emacs Lisp', 'Erlang', 'Euphoria',
        'F#', 'Forth', 'Genie', 'Icon', 'IDL', 'Inform', 'Io', 'Korn shell',
        'LabVIEW', 'Ladder Logic', 'LiveCode', 'Maple', 'Mercury', 'ML', 'AI', 'MQL4',
        'NATURAL', 'NXT-G', 'OpenCL', 'Oz', 'PL/I', 'PostScript', 'Q', 'Racket',
        'Red', 'Ring', 'RPG', 'S', 'SPARK', 'Stata', 'Vala', 'Verilog', 'VHDL',
        'PowerShell', 'Elm', 'Solidity', 'Jupyter Notebook', 'Wolfram Language',
        'XSLT', 'YAML', 'Zig', 'Pascal', 'Algorithms', 'Applications', 'Coding',
        'Configuration', 'Debugging', 'Design', 'Documentation', 'Implementation',
        'IOS/Android', 'Modelling', 'Security', 'Testing',
        'A/B Testing', 'Automation', 'Email marketing (Mailchimp, etc)', 'WordPress',
        'Yoast', 'PPC ads', 'Salesforce Pardot', 'SEO', 'Apache Spark', 'Datapine',
        'Erwin Data Modeller', 'Excel', 'Highcharts', 'Qualtrics', 'R-Studio',
        'Rapidminer', 'SAS Forecasting', 'Talend'
    ];

    const [selectedSkill, setSelectedSkill] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSkill(event.target.value);
    };

    const handleAddSkill = () => {
        if (selectedSkill && !selectedSkills.includes(selectedSkill)) {
            onSelectSkill(selectedSkill);
            setSelectedSkill('');
        }
    };

    return (
        <div className="container mt-1">
            <div className="mb-3">
                <select
                    value={selectedSkill}
                    onChange={handleSelectChange}
                    className="form-select bg-dark"
                >
                    <option value="" disabled>Select a skill</option>
                    {skills.map((skill, index) => (
                        <option key={index} value={skill}>{skill}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleAddSkill} className="btn btn-primary">
                Add Skill
            </button>
            <div className="mt-3">
                {selectedSkills.length > 0 && (
                    <ul className="list-group">
                        {selectedSkills.map((skill, index) => (
                            <li key={index} className="list-group-item">
                                {skill}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Skills;