import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/dashboard/profile">Edit Profile</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;