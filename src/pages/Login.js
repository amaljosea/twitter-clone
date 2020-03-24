import React from 'react'
import Header from '../components/Header'
import ImageBackground from '../components/ImageBackground'
import Container from '../components/Container'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
    return (
        <ImageBackground>
            <Container>
                <Header />
                <Button variant="primary">Create Account</Button>
                Login
                <div style={{ width: "30vw" }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                    </Button>
                    </Form>
                </div>
            </Container>
        </ImageBackground>)
}

export default Login