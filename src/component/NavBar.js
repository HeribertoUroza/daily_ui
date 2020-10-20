import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
    return (
        <>
            <div className='nav_container'>
                <span className='nav_links'>
                    <Link to='/'>Intro</Link>
                </span>
                <span className='nav_links'>
                    <Link to='/001'>#001</Link>
                </span>
                
            </div>
        </>
    )
}

export default NavBar;