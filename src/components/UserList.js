import React, { useState, useEffect } from 'react'
import SingleUser from './SingleUser'
import { ListGroup, Alert } from 'react-bootstrap'
import Loading from './Loading'
import apis from '../api'

export const UserList = ({ api }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const onFollowClick = async (id) => {
        const newUser = users.map((user) => {
            if (user.id === id) return { ...user, isFollowing: true }
            return user
        })
        try {
            setError(false)
            setLoading(true)
            const response = await apis.user.follow({ id })
            if (response.data.success) {
                setUsers(newUser)
            }
        }
        catch (e) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const fetchFeeds = async () => {
            try {
                setError(false)
                setLoading(true)
                const response = await api()
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
