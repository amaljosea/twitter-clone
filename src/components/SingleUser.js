import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Avatar from '../images/cardAvatar.png'
import './SingleUser.css'

const SingleUser = () => {
    return (
        <ListGroup.Item className="user-list-content">
            <div className="user-list-text-container">
                <img src={Avatar} alt="avatar" variant="start" className="feed-card-avatar" />
                <div>
                    <h4>Cras justo odio</h4>
                    <p>Following 200</p>
                </div>
            </div>
            <Button>Follow</Button>
        </ListGroup.Item>
    )
}

export default SingleUser




