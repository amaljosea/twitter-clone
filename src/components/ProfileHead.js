import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Avatar from '../images/cardAvatar.png'
import './ProfileHead.css'

const ProfileHead = () => {
    return (
        <ListGroup.Item className="user-list-content">
            <div className="user-list-text-container">
                <img src={Avatar} alt="avatar" variant="start" className="feed-card-avatar" />
                <div>
                    <h4>Cras justo odio</h4>
                    <div className="user-list-details">
                        <p className="user-details-item">Following 200</p>
                        <p className="user-details-item">Following 200</p>
                        <p className="user-details-item">Following 200</p>
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export default ProfileHead




