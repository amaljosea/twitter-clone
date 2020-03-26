import React, { useState, useEffect } from 'react'
import FeedCard from './FeedCard'
import Loading from './Loading'
import { Button, Form, Alert } from 'react-bootstrap'
import api from '../api/index'
export const FeedList = ({ isOwn }) => {
    const [feeds, setFeeds] = useState([])
    const [tweet, setTweet] = useState("")
    const [showNewTweet, setShowNewTweet] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchFeeds = async () => {
            const currentApi = isOwn ? api.tweet.own : api.tweet.all
            try {
                setLoading(true)
                const data = await currentApi()
                setFeeds(data.data)
            }
            catch (e) {
                setError(true)
            }
            finally {
                setLoading(false)
            }

        }
        fetchFeeds()
    }, [])

    const handleSubmit = (event) => {
        setShowNewTweet(false)
        event.preventDefault()
        const newFeeds = [{ id: feeds.length + 1, name: "User", text: tweet, time: Date.now() }, ...feeds]
        setFeeds(newFeeds)
    }
    return (
        <>
            {loading && <Loading />}
            {error && <Alert variant="danger">Something went wrong, Please reload</Alert>}
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
