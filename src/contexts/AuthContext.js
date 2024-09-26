import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        const response = await login(credentials);
        if (response.token) {
            setUser(response.user); // Set user data here
            localStorage.setItem('token', response.token);
            navigate('/dashboard');
        }
    };

    const handleRegister = async (userData) => {
        await register(userData);
        navigate('/login');
    };

    const logout = () => {
        setUser(null); // Clear user data on logout
        localStorage.removeItem('token'); // Remove token from local storage
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleRegister, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
