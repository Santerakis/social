import {connect} from "react-redux";
import Users from "./UsersC";
import {ActionType, RootStateType} from "../../redux/reduxStore";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number

}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    selectPage: (users: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    // const { users } = state.usersPage
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

