import React from 'react';
import {UserType} from "../../redux/usersReducer";

export type UsersPropsType = {
    users: UserType[]
}

const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.map(u => <div key={u.id}>{u.fullname}</div>)}
        </div>
    );
};

export default Users;