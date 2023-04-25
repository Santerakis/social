import {connect} from "react-redux";
import Users from "./Users";
import {ActionType, RootStateType} from "../../redux/reduxStore";
import {Dispatch} from "react";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";

let mapStateToProps = (state: RootStateType) => {
    const { users } = state.usersPage
    return {
        users: users
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

