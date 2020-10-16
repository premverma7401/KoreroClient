import React, { useState } from 'react';
import AdminDashboard from './admin-dashboard/AdminDashboard';
import './projectCard.css';
import UserDashboard from './user-dashboard/UserDashboard';
const Dashboard = () => {
  const [mode, setMode] = useState(false);

  const handleChange = () => {
    setMode(!mode);
  };
  return (
    <div>
      <div className="custom-toggle">
        <div>
          <label>Admin View</label>
        </div>
        <div className="ui toggle checkbox">
          <input
            type="checkbox"
            name="public"
            value={mode}
            onChange={handleChange}
          />
          <label>UserView</label>
        </div>
      </div>
      {mode ? <UserDashboard /> : <AdminDashboard />}
    </div>
  );
};

export default Dashboard;
