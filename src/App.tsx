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
import {connect} from "react-redux";
import Loader from "./common/preloader/Loader";
import {RootStateType} from "./redux/reduxStore";
import {initializeAppTC} from "./redux/appReducer";

type MapStateToDispatch = {
    initializeAppTC: () => void
}
type MapPropsToStateType = {
    isInitializing: boolean
}
type AppPropsType = MapStateToDispatch & MapPropsToStateType

class App extends React.Component<AppPropsType, {}>{
    componentDidMount() {
        this.props.initializeAppTC()
    }
    render() {
        if (!this.props.isInitializing) {
            return <Loader/>
        }

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
                    <Route path={'/login'} component={() => <Login/>}/>
                </div>
            </div>
        );
    }
}
const mapPropsToState = (state: RootStateType): MapPropsToStateType => ({
    isInitializing: state.app.isInitializing
})
export default connect(mapPropsToState, {initializeAppTC})(App);
