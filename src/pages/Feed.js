import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import FeedCard from '../components/FeedCard'
import "./Feed.css"
import { Button } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'


const Feed = () => {
    return (
        <Container>
            <Header displayLinks />
            <Row className="card-row">
                <Col sm={12} md={12} xl={6}>
                    <div>
                        <Button >Write</Button>
                        <FeedCard />
                        <FeedCard />
                        <FeedCard />

                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Feed