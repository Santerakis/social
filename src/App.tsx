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
import {ActionType, StateType} from "./redux/state";

type AppPropsType = {
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
                    <Profile
                        dispatch={props.dispatch}
                        profilePage={props.state.profilePage}
                    />}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs dispatch={props.dispatch}
                                              messagePage={props.state.messagePage}
                       />}/>
                <Route path={'/new'} render={New}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
