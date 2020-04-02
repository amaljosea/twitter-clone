import React from 'react'
import './FeedCard.css'
import { Card } from 'react-bootstrap'
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const FeedCard = ({ dateCreated, author, content }) => {
    return (
        <Card className="feed-card">
            <div className="feed-card-content">
                <div>
                    <div className="feed-card-avathar" />
                </div>
                <Card.Body><div className="feed-card-header">
                    <Card.Title>{author.name}</Card.Title>
                    <p>{dayjs().to(dateCreated)}</p>
                </div>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    )
}

export default FeedCard