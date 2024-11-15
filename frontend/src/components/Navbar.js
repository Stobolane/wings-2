// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/trans">Transactions</Link></li>
                
                
            </ul>
        </nav>
    );
};

export default Navbar;
