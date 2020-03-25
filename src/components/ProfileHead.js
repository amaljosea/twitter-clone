import React from 'react'
import { ListGroup } from 'react-bootstrap'
import './ProfileHead.css'

const ProfileHead = () => {
    return (
        <ListGroup.Item className="user-list-content">
            <div className="user-list-text-container">
                <div>
                    <div className="profile-head-avathar"/>
                </div>
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




