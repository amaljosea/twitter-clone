import React, { useState } from 'react'
import Header from '../components/Header'
import ImageBackground from '../components/ImageBackground'
import Container from '../components/Container'
import { Button, Form, Row, Col } from 'react-bootstrap'
import './Login.css'
const Login = (props) => {
    const [formValues, setFormValues] = useState({
        name: "",
        password: "",
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValues)
        props.history.push('/feed')
    }

    return (
        <ImageBackground>
            <Container>
                <Header />
                <Button variant="primary" onClick={() => props.history.push('/signup')}>Create Account</Button>
                <h2 className="main-title">Login</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group >
                                <Form.Control type="email" placeholder="Email" value={formValues.email} required onChange={(e) => {
                                    setFormValues({ ...formValues, name: e.target.value })
                                }}/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Control type="password" placeholder="Password" alue={formValues.password} required onChange={(e) => {
                                    setFormValues({ ...formValues, password: e.target.value })
                                }}/>
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