import React, { useState, useContext } from 'react';
import Attendance from './Attendance';
import LeaveApplication from './LeaveApplication';
import ProfilePage from './ProfilePage';
import Navigation from './Navigation';
import { AuthContext } from '../contexts/AuthContext';

const DashboardPage = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        // Redirect to login page if necessary
        window.location.href = '/login'; // Adjust this line according to your routing logic
    };

    return (
        <div>
            <Navigation setActivePage={setActivePage} />
            <h2>Dashboard</h2>
            {activePage === 'dashboard' && (
                <p>Welcome to the employee profile dashboard</p>
            )}
            {activePage === 'attendance' && <Attendance />}
            {activePage === 'leave' && <LeaveApplication />}
            {activePage === 'profile' && <ProfilePage />}
            <button onClick={handleLogout} style={{ marginTop: '20px' }}>
                Logout
            </button>
        </div>
    );
};

export default DashboardPage;
