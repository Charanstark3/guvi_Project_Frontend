import React from 'react';

const Navigation = ({ setActivePage }) => {
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => setActivePage('dashboard')}>
                        Dashboard
                    </button>
                </li>
                <li>
                    <button onClick={() => setActivePage('profile')}>
                        Profile
                    </button>
                </li>
                <li>
                    <button onClick={() => setActivePage('attendance')}>
                        Attendance
                    </button>
                </li>
                <li>
                    <button onClick={() => setActivePage('leave')}>
                        Leave Application
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
