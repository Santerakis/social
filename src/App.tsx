import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import New from "./Components/New/New";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {ActionType, StateType} from "./redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: any
    state: StateType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {

    return (
        <div className='appWrapper'>
            <Header/>
            <Navbar/>
            <div className='appWrapperContent'>
                <Route path={'/profile'} render={() =>
                    <Profile store={props.store}/>}/>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path={'/new'} render={New}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
