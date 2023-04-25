import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/new' activeClassName={s.active}>New</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item+' '+s.setting}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item+' '+s.friends}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                <div className={s.friendsBlock}>
                    <div className={s.friend}>
                        <img src='https://kartinkof.club/uploads/posts/2022-09/1662503352_1-kartinkof-club-p-novie-i-krasivie-kartinki-muzhskoe-litso-1.jpg'/>
                        <div>◽Ivan</div>
                    </div>
                    <div className={s.friend}>
                        <img src='https://ath2.unileverservices.com/wp-content/uploads/sites/7/2017/12/voluminous-blonde-updo1.jpg'/>
                        <div>Ira</div>
                    </div>
                    <div className={s.friend}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qeEcXv-sFj02AfYCgsLWCsMotvKY8_IXHw&usqp=CAU'/>
                        <div>◽Anita</div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;