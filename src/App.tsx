import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import New from "./Components/New/New";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path={'/profile'} component={() => <Profile posts={props.state.profilePage.posts}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages}/>}/>
                <Route path={'/new'} component={New}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
