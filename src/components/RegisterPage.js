import React, { useState } from 'react';
import { register } from '../services/authService';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        employeeName: '',
        employeeId: '',
        email: '',
        dateOfBirth: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;

        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Remove confirmPassword from the object before sending it to the backend
            const { confirmPassword, ...userData } = formData;
            const response = await register(userData);
            setSuccess(response.message);
            setError('');

            // Redirect or perform login actions after successful registration
            setTimeout(() => {
                window.location.href = "/login"; // Redirect to login page
            }, 2000); // 2 seconds delay for the success message
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed.");
            setSuccess('');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input 
                    type="text" 
                    name="employeeName" 
                    placeholder="Employee Name" 
                    value={formData.employeeName} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="employeeId" 
                    placeholder="Employee ID" 
                    value={formData.employeeId} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="date" 
                    name="dateOfBirth" 
                    value={formData.dateOfBirth} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password" 
                    value={formData.confirmPassword} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Register</button>
            </form>

            {/* Display success or error messages */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default RegisterPage;
