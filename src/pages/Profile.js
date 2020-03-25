import React from 'react'
import { MainTabs } from '../components/MainTabs'
import Header from '../components/Header'
import TabsContainer from '../components/TabsContainer'
import Container from '../components/Container'

const Profile = () => {
    return (
        <Container>
            <Header displayLinks/>
            <TabsContainer>
                Profile
                <MainTabs></MainTabs>
            </TabsContainer>
        </Container>
    )
}

export default Profile
