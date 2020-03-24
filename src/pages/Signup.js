import React from 'react'
import Header from '../components/Header'
import ImageBackground from '../components/ImageBackground'
import { Button, Form, Row, Col } from 'react-bootstrap'
import Container from '../components/Container'
import './Signup.css'
const Signup = (props) => {
    return (
        <ImageBackground>
            <Container>
                <Header />
                <Button variant="primary" onClick={() => props.history.push('/login')}>Login</Button>
                <h2 className="main-title">Create Account</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        <Form>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <div className="form-bottom-container">
                                <Button variant="primary" type="submit">
                                    Signup
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </ImageBackground >
    )
}

export default Signup
