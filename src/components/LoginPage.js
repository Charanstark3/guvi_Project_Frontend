import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ employeeId: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(credentials);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="employeeId" placeholder="Employee ID" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    );
};

export default LoginPage;
