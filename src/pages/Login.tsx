import { useState } from 'react';
import '../styles/index.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Logging in', { email, password });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-white">Login</h2>
            <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="form-group mb-3">
                    <label className="label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control bg-dark text-white"
                        placeholder="Login"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control bg-dark text-white"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary submit-button">Login</button>
            </form>
        </div>
    );
};

export default Login;