import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png?20210909091158'/></a>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
};

export default Header;