import React, { useState } from 'react';
import axios from 'axios';

const LeaveApplication = () => {
    const [leaveData, setLeaveData] = useState({ leaveType: '', startDate: '', endDate: '' });
    const [error, setError] = useState(''); // State to store error messages

    const handleChange = (e) => {
        setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
    };

    const applyLeave = async (e) => {
        e.preventDefault(); // Prevent form submission

        // Clear previous error messages
        setError('');

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:5000/api/leave/apply', leaveData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            alert('Leave applied successfully!');
        } catch (err) {
            if (err.response) {
                // Set the error message from the server response
                setError(err.response.data.error || 'An unexpected error occurred.');
            } else {
                setError('An error occurred while applying for leave.');
            }
        }
    };

    return (
        <div>
            <h3>Apply for Leave</h3>
            <form onSubmit={applyLeave}>
                <input
                    type="text"
                    name="leaveType"
                    placeholder="Leave Type"
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="startDate"
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="endDate"
                    onChange={handleChange}
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                <button type="submit">Apply</button>
            </form>
        </div>
    );
};

export default LeaveApplication;
