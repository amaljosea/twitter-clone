import React from 'react'
import Header from '../components/Header'
import ImageBackground from '../components/ImageBackground'
import Container from '../components/Container'
import { Button, Form, Row, Col } from 'react-bootstrap'
import './Login.css'
const Login = () => {
    return (
        <ImageBackground>
            <Container>
                <Header />
                <Button variant="primary">Create Account</Button>
                <h2 className="main-title">Login</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="form-bottom-container">
                                <p>Forgot Password?</p>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </ImageBackground>)
}

export default Login