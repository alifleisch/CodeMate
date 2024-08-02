import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import { Paths } from '@app/Paths';

const Navbar = () => {
    return (
        <nav className="navbar justify-content-center navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-container d-flex">
                <Link className="navbar-brand" to="/">CodeMate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to={Paths.About}>About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Paths.Postsfeed}>Feed</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Paths.DiscoverUsers}>Discover Users</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Paths.Groups}>Groups</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Paths.Messaging}>Messages</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Paths.Profile}>My Profile</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Paths.Login}>Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Paths.Register}>Register</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;