import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/pages/home">CodeMate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/pages/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pages/messaging">Messages</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pages/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pages/skills">Skills</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pages/level">Levels</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pages/profile">Profile</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pages/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pages/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;