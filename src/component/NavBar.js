import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
    return (
        <>
            <div className='nav_container'>
                <Link to='/001'>001</Link>
            </div>
        </>
    )
}

export default NavBar;