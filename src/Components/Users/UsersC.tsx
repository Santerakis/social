import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/social_user.png'
import {UserType} from "../../redux/usersReducer";
import Pagination from '@mui/material/Pagination';

type ResponseType = {
    error: null
    items: UserType[]
    totalCount: number
}

class Users extends React.Component<UsersPropsType>{
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res =>  {
                // this.props.setUsers(res.data.items)
                // this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onSelectPage = (page: number) => {
        // this.props.setCurrentPage(page)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            // .then(res =>  this.props.setUsers(res.data.items))
    }
    handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        // this.props.setCurrentPage(value)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${this.props.pageSize}`)
            // .then(res =>  this.props.setUsers(res.data.items))
    };

    // getUsers = () => {                        //что бы контекст вызова сохранился
    //     if (this.props.users.length === 0) {
    //         axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(res =>  this.props.setUsers(res.data.items))
    //     }
    // }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push({id: i})
        }
        console.log(pages)
        return <div>
            <p>Users</p>
            <Pagination count={pagesCount} page={this.props.currentPage} onChange={this.handleChange} color="primary" size="small"/>
            {/*{pages.map(p => <button onClick={(e) =>{this.onSelectPage(p.id)}} className={this.props.currentPage === p.id ?s.selectedButton :''}>{p.id}</button>)}*/}
            {this.props.users.map(u => {
                return <div key={u.id} className={s.user}>
                    <div>
                        <img src={u.photos.small != null ?u.photos.small :userPhoto} className={s.userPhoto} alt="user photo"/>
                        {u.followed
                            ?<div><button className={s.button} onClick={() => {this.props.unfollow(u.id)}}>unfollow</button></div>
                            :<div><button className={s.button} onClick={() => {this.props.follow(u.id)}}>follow</button></div>}
                    </div>
                    <div className={s.userInfo}>
                        <div>
                            <div>{u.name}</div>
                            <div>{'u.status'}</div>
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
}







// props.setUsers([{id: 1, photoUrl: 'https://i0.wp.com/thecitylife.org/wp-content/uploads/2021/02/011_BOSS_ChrisHemsworth_SR21.jpg?resize=1025%2C1536&ssl=1', followed: false, fullname: 'Sergey', status: 'I am a boss', location: {city: 'Daugavpils', country: 'Latvia'}},
//     {id: 2, photoUrl: 'https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg', followed: true, fullname: 'Dima', status: 'I am a gym', location: {city: 'Gumgurg', country: 'Niderland'}},
//     {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJrhXELkKOQHxV3Hrb549pijhwfXDjVpfnWZVw2zmB2hhhleKR8VO-_5SXMLnJwTSDdU&usqp=CAU', followed: false, fullname: 'Kate', status: 'I am a girl', location: {city: 'LA', country: 'USA'}},
//     {id: 4, photoUrl: 'https://st.depositphotos.com/1017986/1941/i/450/depositphotos_19419591-stock-photo-face-and-hands-of-beautiful.jpg', followed: true, fullname: 'Alla', status: 'I am a boss', location: {city: 'London', country: 'UK'}}])