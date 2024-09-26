import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{user.employeeName}</td> {/* Update to employeeName */}
                        </tr>
                        <tr>
                            <td>Employee ID:</td>
                            <td>{user.employeeId}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Date of Birth:</td>
                            <td>{user.dateOfBirth}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default ProfilePage;
