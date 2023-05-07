import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import New from "./Components/New/New";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

function App() {
    return (
        <div className='appWrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path={'/profile/:userId?'} render={() =>
                    <ProfileContainer/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/new'} render={New}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={Login}/>
            </div>
        </div>
    );
}

export default App;
