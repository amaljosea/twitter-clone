import React, { useState } from 'react'
import Header from '../components/Header'
import TabsContainer from '../components/TabsContainer'
import Container from '../components/Container'
import { Nav } from 'react-bootstrap'
import UserList from '../components/UserList'
import FeedList from '../components/FeedList'
import ProfileHead from '../components/ProfileHead'


const tabContent = {
    followers: UserList,
    post: FeedList,
    following: UserList,
}

const Profile = () => {
    const [activeTab, setActiveTab] = useState("post")
    const ActiveComponent = tabContent[activeTab]
    return (
        <Container>
            <Header displayLinks />
            <TabsContainer>
                <ProfileHead />
                <Nav fill variant="tabs" activeKey="post" onSelect={(eventKey) => { setActiveTab(eventKey) }}>
                    <Nav.Item >
                        <Nav.Link eventKey="post">Post</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="followers">Followers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="following">Following</Nav.Link>
                    </Nav.Item>
                </Nav>
                <ActiveComponent activeTab={activeTab} />
            </TabsContainer>
        </Container>
    )
}

export default Profile
