import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Avatar from '../images/cardAvatar.png'
import './SingleUser.css'

const SingleUser = () => {
    return (
        <ListGroup.Item className="user-list-content">
            <div className="user-list-text-container">
                <div>
                    <div className="user-list-avathar">

                    </div>
                </div>
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




