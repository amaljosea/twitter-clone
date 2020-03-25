import React from 'react'
import SingleUser from './SingleUser'
import { ListGroup } from 'react-bootstrap'

export const UserList = () => {
    return (
        <ListGroup>
            <SingleUser />
            <SingleUser />
            <SingleUser />
        </ListGroup>
    )
}

export default UserList
