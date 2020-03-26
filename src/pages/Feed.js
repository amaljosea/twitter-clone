import React, { useState } from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import FeedList from '../components/FeedList'
import TabsContainer from '../components/TabsContainer'
import "./Feed.css"
import { Button, Form } from 'react-bootstrap'

const Feed = () => {
    const [tweet, setTweet] = useState("")
    const [showNewTweet, setShowNewTweet] = useState(false)

    const handleSubmit = () => {

    }
    return (
        <Container>
            <Header displayLinks />
            <TabsContainer>
                {showNewTweet ? <section>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Control as="textarea" rows="3" placeholder="What is happening?" value={tweet} required onChange={(e) => {
                                setTweet(e.target.value)
                            }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="submit-tweet">
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={()=>setShowNewTweet(false)}>
                            Discard
                        </Button>
                    </Form>
                </section> : <Button onClick={() => setShowNewTweet(true)}>Write</Button>}
                <FeedList />
            </TabsContainer>
        </Container >
    )
}


export default Feed