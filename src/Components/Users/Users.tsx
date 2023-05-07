import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/social_user.png'
import {UserType} from "../../redux/usersReducer";
import Pagination from "@mui/material/Pagination";
import {NavLink} from "react-router-dom";
import {DataType} from "../Header/HeaderContainer";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
    followInProgress: (progress: boolean, userId: number) => void
    followingInProgress: number[]
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}
export type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: DataType
}

const Users = (props: UsersPropsType) => {
    console.log('render Users')

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // let pages = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push({id: i})
    // }

    return <div className={s.usersBlock}>
        <p>Users</p>
        <Pagination count={pagesCount} page={props.currentPage} onChange={props.handleChange} color="primary"
                    size="small"/>
        {/*{pages.map(p => <button onClick={(e) =>{this.onSelectPage(p.id)}} className={this.props.currentPage === p.id ?s.selectedButton :''}>{p.id}</button>)}*/}
        {props.users.map(u => {
            return <div key={u.id} className={s.user}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                             alt="user photo"/>
                    </NavLink>
                    {u.followed
                        ? <div>
                            <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={() => {
                                // debugger
                                props.unfollowTC(u.id)

                                // props.followInProgress(true, u.id)
                                // followUnfollowAPI.unFollow(u.id).then(res => {
                                //     props.followInProgress(false, u.id)
                                //     if (res.data.resultCode === 0) {
                                //         props.unfollow(u.id)
                                //     }
                                // })


                            }}>😪follow
                            </button>
                        </div>
                        : <div>
                            <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={() => {
                                // debugger
                                props.followTC(u.id)

                                // props.followInProgress(true, u.id)
                                // followUnfollowAPI.follow(u.id).then(res => {
                                //     props.followInProgress(false, u.id)
                                //     if (res.data.resultCode === 0) {
                                //         props.follow(u.id)
                                //     }
                                // })
                            }}>follow
                            </button>
                        </div>}
                </div>
                <div className={s.userInfo}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{'u.location.country'},</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>
        })}
    </div>
}

export default Users;

