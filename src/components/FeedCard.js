import React from 'react'
import './FeedCard.css'
import { Card } from 'react-bootstrap'
import Avatar from '../images/cardAvatar.png'
import Background from '../images/cardBackground.png'

const FeedCard = () => {
    return (
        <Card className="feed-card">
            <div className="feed-card-content">
                <div>
                    <div className="feed-card-avathar">

                    </div>
                </div>
                <Card.Body><div className="feed-card-header">
                    <Card.Title>Special title treatment</Card.Title>
                    <p>10 mins ago</p>
                </div>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                        With supporting text below as a natural lead-in to additional content.
                         </Card.Text>
                </Card.Body>
            </div>
        </Card>
    )
}

export default FeedCard