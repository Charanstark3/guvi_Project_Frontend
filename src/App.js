import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Do not use BrowserRouter here, just Routes
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';
import ProfilePage from './components/ProfilePage';
import Attendance from './components/Attendance';
import LeaveApplication from './components/LeaveApplication';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/leave" element={<LeaveApplication />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
