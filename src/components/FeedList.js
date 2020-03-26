import React, { useState, useEffect } from 'react'
import FeedCard from './FeedCard'
import { Button, Form } from 'react-bootstrap'


const data = [
    {
        id: 1,
        name: "Amal Jose",
        time: 1585157698273,
        text: "Lorem"
    },
    {
        id: 2,
        name: "Amal Jose",
        time: 1585157698273,
        text: "Lorem"
    },
    {
        id: 3,
        name: "Ajay Jose",
        time: 1585157698273,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially"
    }
]

export const FeedList = ({ isOwn }) => {
    const [feeds, setFeeds] = useState([])
    const [tweet, setTweet] = useState("")
    const [showNewTweet, setShowNewTweet] = useState(false)


    useEffect(() => {
        setFeeds(data)
    }, [])

    const handleSubmit = (event) => {
        setShowNewTweet(false)
        event.preventDefault()
        const newFeeds = [{ id: feeds.length + 1, name: "User", text: tweet, time: Date.now() }, ...feeds]
        setFeeds(newFeeds)
    }
    return (
        <>
            {!isOwn && <>{showNewTweet ? <section>
                <Form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Control as="textarea" rows="3" placeholder="What is happening?" value={tweet} required onChange={(e) => {
                            setTweet(e.target.value)
                        }} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-tweet">
                        Submit
                        </Button>
                    <Button variant="secondary" onClick={() => setShowNewTweet(false)}>
                        Discard
                        </Button>
                </Form>
            </section> : <Button onClick={() => setShowNewTweet(true)}>Write</Button>}</>}
            {feeds.map((feed) => <FeedCard {...feed} />)}
        </>
    )
}

export default FeedList
