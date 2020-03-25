import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import SingleUser from '../components/SingleUser'

import TabsContainer from '../components/TabsContainer'
import { ListGroup } from 'react-bootstrap'

export const Users = () => {
    return (
        <Container>
            <Header displayLinks />
            <TabsContainer>
                <ListGroup>
                    <SingleUser />
                    <SingleUser />
                    <SingleUser />
                </ListGroup>
            </TabsContainer>
        </Container>
    )
}

export default Users
