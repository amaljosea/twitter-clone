import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import FeedCard from '../components/FeedCard'
import TabsContainer from '../components/TabsContainer'
import "./Feed.css"
import { Button } from 'react-bootstrap'

const Feed = () => {
    return (
        <Container>
            <Header displayLinks />
            <TabsContainer>
                <Button >Write</Button>
                <FeedCard />
                <FeedCard />
                <FeedCard />
            </TabsContainer>
        </Container >
    )
}

export default Feed