import React, { useState, useEffect } from 'react'
import SingleUser from './SingleUser'
import { ListGroup, Alert } from 'react-bootstrap'
import api from '../api/index'
import Loading from './Loading'

export const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const onFollowClick = (id) => {
        const newUser = users.map((user) => {
            if (user.id === id) return { ...user, isFollowing: true }
            return user
        })
        setUsers(newUser)
    }

    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                setError(false)
                setLoading(true)
                const response = await api.user.all()
                setUsers(response.data)
            }
            catch (e) {
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }
        fetchFeeds()
    }, [])

    return (
        <>
            {loading && <Loading />}
            {error && <Alert variant="danger">Something went wrong, Please reload</Alert>}
            <ListGroup>
                {users.map((user) => <SingleUser key={user.id} onFollowClick={onFollowClick} {...user} />)}
            </ListGroup>
        </>
    )
}

export default UserList
