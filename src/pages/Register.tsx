import { useState } from 'react';
import '../styles/index.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        console.log('Registering', { username, email, password });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-white">Register</h2>
            <form className="register-form" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                <div className="form-group mb-3">
                    <label className="label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control bg-dark text-white"
                        placeholder="Username"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control bg-dark text-white"
                        placeholder="example@domain.com"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control bg-dark text-white"
                        placeholder="Must have at least 6 characters"
                    />
                </div>
                <button type="submit" className="btn btn-primary submit-button">Register</button>
            </form>
        </div>
    );
};

export default Register;