import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ProfileEdit from '../components/ProfileEdit';

const DashboardPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/profile" element={<ProfileEdit />} />
            </Routes>
        </Router>
    );
};

export default DashboardPage;