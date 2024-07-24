import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../Paths';
import { postLogin } from '../mock/mockApi';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await postLogin(email, password);
            console.log(response);
            navigate(Paths.Home);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
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
                        placeholder="Must have at least 6 characters"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary submit-button"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Login;