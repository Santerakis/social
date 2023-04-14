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
import {DataType} from "./index";

type AppPropsType = {
    data: DataType
}

function App(props: AppPropsType) {
    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path={'/profile'} component={() => <Profile posts={props.data.posts}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dialogs={props.data.dialogs} messages={props.data.messages}/>}/>
                <Route path={'/new'} component={New}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
