import React from 'react';
import style from '../Header/Header.module.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a className={style.col}>Messages</a>
            </div>
            <div>
                <a>New</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;