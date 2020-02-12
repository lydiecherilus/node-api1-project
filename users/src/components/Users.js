import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const UserCard = props => {
    console.log(props)
    return (
        <div className="usercard">
            <h3>Name: {props.user.name}</h3>
            <h5>Bio: {props.user.bio}</h5>
            <p>Created Date: {props.user.created_at}</p>
            <p>Updated Date: {props.user.updated_at}</p>
        </div>
    )
}

const UsersList = function () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users`)
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className="users">
            {users.map((user, key) => {
                return (
                    <UserCard
                        user={user}
                        key={key} />
                );
            })};
        </div>
    )
}
export default UsersList;