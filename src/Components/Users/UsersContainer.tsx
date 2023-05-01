import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/reduxStore";
import {
    followAC, isLoadingAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Loader from "../../common/preloader/Loader";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isLoading: boolean
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    selectPage: (users: number) => void
    setTotalUsersCount: (count: number) => void
    isLoad: (isLoading: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

type ResponseType = {
    error: null
    items: UserType[]
    totalCount: number
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.isLoad(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.isLoad(false)
            })
    }

    handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        this.props.selectPage(value)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <>
            {this.props.isLoading
                ? <Loader/>
                : <Users users={this.props.users}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         totalUsersCount={this.props.totalUsersCount}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         handleChange={this.handleChange}
                />}
        </>
    }
}


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    // const { users } = state.usersPage
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        selectPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        },
        isLoad: (iaLoading: boolean) => {
            dispatch(isLoadingAC(iaLoading))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

