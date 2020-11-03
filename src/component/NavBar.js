import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
    return (
        <>
            <div className='nav_container'>
                <span>
                    <Link 
                        to='/' 
                        className='nav_links nav_first' 
                        >Intro
                    </Link>
                </span>
                <span>
                    <Link
                        to='/002'
                        className='nav_links'
                    >#002
                    </Link>
                </span>
                <span>
                    <Link 
                        to='/001'
                        className='nav_links'
                        >#001
                    </Link>
                </span>
                
            </div>
        </>
    )
}

export default NavBar;