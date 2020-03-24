import React from 'react'
import './FeedCard.css'
import { Card } from 'react-bootstrap'
import Avatar from '../images/cardAvatar.png'
import Background from '../images/cardBackground.png'

const FeedCard = () => {
    return (
        <Card className="feed-card">
            <div className="feed-card-content">
                <Card.Img src={Avatar} alt="avatar" variant="start" className="feed-card-avatar" />
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
                <Card.Img src={Background} alt="Card image" variant="end" />
            </div>
        </Card>
    )
}

export default FeedCard