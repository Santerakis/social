import {connect} from "react-redux";
import {RootStateType} from "../../redux/reduxStore";
import {
    follow, followInProgress, loading,
    setCurrentPage, setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Loader from "../../common/preloader/Loader";
import {usersAPI} from "../../ api/api";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isLoading: boolean
    followingInProgress: number[]
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (users: number) => void
    setTotalUsersCount: (count: number) => void
    loading: (isLoading: boolean) => void
    followInProgress: (progress: boolean, userId: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

export type ResponseType = {
    error: null
    items: UserType[]
    totalCount: number
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.loading(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.items)
                this.props.setTotalUsersCount(res.totalCount)
                this.props.loading(false)
            })
    }

    handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        this.props.setCurrentPage(value)

        usersAPI.getUsers(value, this.props.pageSize)
            .then(res => {
                this.props.setUsers(res.items)
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
                         followInProgress={this.props.followInProgress}
                         followingInProgress={this.props.followingInProgress}

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
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToProps => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         selectPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (count: number) => {
//             dispatch(setTotalUsersCountAC(count))
//         },
//         isLoad: (iaLoading: boolean) => {
//             dispatch(isLoadingAC(iaLoading))
//         },
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    loading,
    followInProgress
})(UsersContainer)

