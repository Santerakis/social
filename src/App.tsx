import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import New from "./Components/New/New";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {store} from "./redux/reduxStore";

function App() {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path={'/profile'} render={() =>
                    <Profile/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/new'} render={New}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
                <Route path={'/users'} render={() =>
                <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
