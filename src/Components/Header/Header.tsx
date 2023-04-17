import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png?20210909091158'/></a>
        </header>
    );
};

export default Header;