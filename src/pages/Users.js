import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import { ListGroup } from 'react-bootstrap'
import TabsContainer from '../components/TabsContainer'

export const Users = () => {
    return (
        <Container>
            <Header displayLinks />
            <TabsContainer>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </TabsContainer>
        </Container>
    )
}

export default Users
