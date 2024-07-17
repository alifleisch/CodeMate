import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/index.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Logging in', { email, password });
    };

    return (
        <div className="container mt-4">
            <motion.h2
                className="text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Login
            </motion.h2>
            <motion.form
                className="login-form"
                onSubmit={(e) => { e.preventDefault(); handleLogin(); }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
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
            </motion.form>
        </div>
    );
};

export default Login;