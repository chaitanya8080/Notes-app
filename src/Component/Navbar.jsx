

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/bookmarks'>Bookmark</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;