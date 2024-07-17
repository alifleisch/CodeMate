import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
    const skills = [
        'JavaScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'Express', 'Next.js', 'Nest.js',
        'Java', 'Spring', 'Hibernate', 'JavaServer Faces (JSF)', 'Grails', 'Vaadin', 'Kotlin',
        'Python', 'Django', 'Flask', 'FastAPI', 'Pyramid', 'C', 'C++',
        'Ruby', 'Ruby on Rails', 'Sinatra', 'PHP', 'Laravel', 'Symfony', 'CodeIgniter',
        'C#', 'ASP.NET', 'Entity Framework', 'Blazor', 'Go', 'Gin', 'Beego', 'Flutter',
        'TensorFlow', 'Apache Spark', 'VB.NET', 'R', 'SQL',
        'Swift', 'Perl', 'Assembly language', 'MATLAB', 'Classic Visual Basic',
        'Apache Groovy', 'Objective-C', 'Rust', 'SAS', 'Scratch', 'D', 'Dart', 'PL/SQL',
        'Logo', 'Delphi', 'COBOL', 'OpenEdge ABL', 'Julia', 'ABAP', 'Scala',
        'Transact-SQL', 'Scheme', 'Prolog', 'Ada', 'Lisp', 'Apex', 'Lua', 'Fortran',
        'Haskell', 'Hack', 'VBScript', 'Visual FoxPro', 'TypeScript', 'AWK',
        'ActionScript', 'Tcl', 'Smalltalk', 'ABC', 'Alice', 'APL', 'AutoLISP',
        'Bash', 'bc', 'Bourne shell', 'C shell', 'Clipper', 'Clojure', 'CoffeeScript',
        'Common Lisp', 'Crystal', 'cT', 'Elixir', 'Emacs Lisp', 'Erlang', 'Euphoria',
        'F#', 'Forth', 'Genie', 'Icon', 'IDL', 'Inform', 'Io', 'Korn shell',
        'LabVIEW', 'Ladder Logic', 'LiveCode', 'Maple', 'Mercury', 'ML', 'MQL4',
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

    return (
        <div className="container mt-4">
            <h2>Skills</h2>
            <ul className="list-group">
                {skills.map((skill, index) => (
                    <li key={index} className="list-group-item bg-dark text-light">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;