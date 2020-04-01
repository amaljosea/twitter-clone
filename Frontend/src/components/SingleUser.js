import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import './SingleUser.css'

const SingleUser = ({ id, name, isFollowing, followers, onFollowClick }) => {
    return (
        <ListGroup.Item className="user-list-content">
            <div className="user-list-text-container">
                <div>
                    <div className="user-list-avathar">

                    </div>
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>Following {followers}</p>
                </div>
            </div>
            {isFollowing ? <p className="following-text">Following</p> : <Button onClick={() => onFollowClick(id)}>Follow</Button>}
        </ListGroup.Item>
    )
}

export default SingleUser




