import React from 'react';

const Navbar = () => (
    <nav>
        <div className="logo">StreamHub</div>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#tvshows">TV Shows</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#new">New & Popular</a></li>
            <li><a href="#mylist">My List</a></li>
        </ul>
        <div className="nav-right">
            <input type="text" className="search-box" placeholder="Search..." />
            <button className="profile-btn">U</button>
        </div>
    </nav>
);

export default Navbar;