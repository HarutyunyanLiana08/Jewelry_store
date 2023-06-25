import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminPage.css';

export default function AdminPage() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <ul className="menu-list">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>Users</li>
          <li>Orders</li>
        </ul>
        <button className="logout-button" onClick={handleLogOut}>
          LogOut
        </button>
      </div>
      <div className="content">
        <h2 className="page-title">Admin Page</h2>
      </div>
    </div>
  );
}







































