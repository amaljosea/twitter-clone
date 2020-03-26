import React, { useState, useEffect } from 'react'
import SingleUser from './SingleUser'
import { ListGroup } from 'react-bootstrap'

const usersData = [
    {
        id: 1,
        name: "Amal Jose",
        followers: 20,
        isFollowing: true
    },
    {
        id: 2,
        name: "Amal Jose",
        followers: 20,
        isFollowing: true
    },
    {
        id: 3,
        name: "Amal Jose",
        followers: 20,
        isFollowing: false
    }
]


export const UserList = () => {
    const [users, setUsers] = useState([])

    const onFollowClick = (id) => {
        const newUser = users.map((user) => {
            if (user.id === id) return { ...user, isFollowing: true }
            return user
        })
        setUsers(newUser)
    }

    useEffect(() => {
        setUsers(usersData)
    }, [])

    return (
        <ListGroup>
            {users.map((user) => <SingleUser key={user.id} onFollowClick={onFollowClick} {...user}  />)}
        </ListGroup>
    )
}

export default UserList
