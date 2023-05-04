import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {RootStateType} from "../../redux/reduxStore";

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}
type ResponseType = {
    resultCode: number
    messages: string[]
    data: DataType
}
// type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (data: DataType) => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true   // для подцепления куки в кросдоменных запросах и если принемающий сервак разрешает.
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);