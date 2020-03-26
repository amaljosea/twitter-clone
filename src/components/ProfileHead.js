import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import './ProfileHead.css'
import { UserContext } from '../App'

const ProfileHead = () => {
    const { userDetails } = useContext(UserContext)

    return (
        <ListGroup.Item className="user-list-content">
            <div className="user-list-text-container">
                <div>
                    <div className="profile-head-avathar" />
                </div>
                <div>
                    <h4>{userDetails?.displayName}</h4>
                    <div className="user-list-details">
                        <p className="user-details-item">Post: {userDetails?.followers}</p>
                        <p className="user-details-item">Followers: {userDetails?.followers}</p>
                        <p className="user-details-item">Following: {userDetails?.following}</p>
                    </div>
                </div>
            </div>
        </ListGroup.Item>
    )
}

export default ProfileHead




