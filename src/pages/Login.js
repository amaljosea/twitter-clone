import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import ImageBackground from '../components/ImageBackground'
import Container from '../components/Container'
import { AuthContext } from '../components/AuthProvider'
import { Button, Form, Row, Col, Alert, Spinner } from 'react-bootstrap'
import './Login.css'
import graphql from '../graphql';

const Login = (props) => {
    const { setAuthenticated } = useContext(AuthContext)
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setError(false)
            setLoading(true)
            const response = await graphql(`mutation signin($identity: String, $secret: String) {
                authenticate: authenticateUserWithPassword(email: $identity, password: $secret) {
                  item {
                    id
                  }
                }
              }`, {
                identity: formValues.email,
                secret: formValues.password
            })
            if(response.data.authenticate.item.id) {
                setAuthenticated(true)
                props.history.push("/");
            }
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ImageBackground>
            <Container>
                <Header />
                <Button variant="secondary" onClick={() => props.history.push('/signup')}>Create Account</Button>
                <h2 className="main-title">Login</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group >
                                <Form.Control type="email" placeholder="Email" value={formValues.email} required onChange={(e) => {
                                    setFormValues({ ...formValues, email: e.target.value })
                                }} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control type="password" placeholder="Password" alue={formValues.password} required onChange={(e) => {
                                    setFormValues({ ...formValues, password: e.target.value })
                                }} />
                            </Form.Group>
                            <div className="form-bottom-container">
                                <p>Forgot Password?</p>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </div>
                            <div className="error-loading-container">
                                {loading && <Spinner animation="border" variant="primary" />}
                                {error && <Alert variant="danger">Something went wrong</Alert>}
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </ImageBackground>)
}

export default Login