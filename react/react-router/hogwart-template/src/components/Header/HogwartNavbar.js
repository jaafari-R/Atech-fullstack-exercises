import React from 'react';
import { Link } from "react-router-dom";
import './HogwartNavbar.css';

const HogwartNavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-link">
                <Link to="/">Home</Link>
            </div>
            <div className="navbar-link">
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}


export default HogwartNavbar;
