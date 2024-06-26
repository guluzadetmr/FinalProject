import React, { useState } from 'react';
import styles from './ProfileEdit.module.scss';

const ProfileEdit = () => {
    const [username, setUsername] = useState("John Doe");
    const [email, setEmail] = useState("john.doe@example.com");

    const handleSave = () => {
        // Save profile information
        console.log('Profile saved:', { username, email });
        alert('Profile updated successfully!');
    };

    return (
        <div className={styles.profileEdit}>
            <h1>Edit Profile</h1>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default ProfileEdit;