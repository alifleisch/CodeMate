import { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        console.log('Logging in', { email, password });
    };

    return (
        <div className="container mt-4">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white"
            >
                Login
            </motion.h2>
            <form
                className="login-form"
                onSubmit={(e) => { e.preventDefault(); handleLogin(); }}
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
            </form>
            <button
                type="submit"
                className="btn btn-primary submit-button"
            >
                Login
            </button>

        </div>
    );
};

export default Login;