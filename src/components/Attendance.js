import React from 'react';
import axios from 'axios';

const Attendance = () => {
    const markAttendance = async () => {
        const token = localStorage.getItem('token');
        const employeeId = localStorage.getItem('employeeId'); // Fetching employeeId from localStorage

        console.log('Employee ID:', employeeId); // Debugging line

        if (!employeeId) {
            alert('Please make sure you are logged in!');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/attendance/mark', 
                { employeeId, status: 'Present' }, // Always marking as 'Present'
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            alert('Attendance marked successfully!');
        } catch (error) {
            console.error('Error marking attendance:', error);
            alert('Failed to mark attendance: ' + error.response?.data?.message || 'Unknown error');
        }
    };

    return (
        <div>
            <h3>Mark Attendance</h3>
            <button onClick={markAttendance}>Mark Present</button>
        </div>
    );
};

export default Attendance;
