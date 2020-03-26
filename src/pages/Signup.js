import React, { useState, useContext } from 'react'

import Header from '../components/Header'
import ImageBackground from '../components/ImageBackground'
import Container from '../components/Container'
import { Button, Form, Row, Col, Alert, Spinner } from 'react-bootstrap'

import './Signup.css'
import firebaseApp from '../firebase'
import { UserContext } from '../App'

const Signup = (props) => {
    const { setUserDetails } = useContext(UserContext)
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setError(false)
            setLoading(true)
            const user = await firebaseApp.auth().createUserWithEmailAndPassword(formValues.email, formValues.password)
            console.log(user)

            const userDetails = {
                displayName: formValues.name,
                followers: 3, //give same initial data as in mock apis
                following: 2,
                post: 3
            }
            await firebaseApp.auth().currentUser.updateProfile({//as there is no backend now storing details as string in displayName
                displayName: JSON.stringify(userDetails)
            });
            setUserDetails(userDetails)
            props.history.push("/");
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
                <Button variant="primary" onClick={() => props.history.push('/login')}>Login</Button>
                <h2 className="main-title">Create Account</h2>
                <Row>
                    <Col xs={12} sm={4}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control value={formValues.name} placeholder="Name" required onChange={(e) => {
                                    setFormValues({ ...formValues, name: e.target.value })
                                }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control value={formValues.email} type="email" placeholder="Email" required onChange={(e) => {
                                    setFormValues({ ...formValues, email: e.target.value })
                                }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control value={formValues.password} type="password" placeholder="Password" required onChange={(e) => {
                                    setFormValues({ ...formValues, password: e.target.value })
                                }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control value={formValues.repeatPassword} type="password" placeholder="Confirm Password" required onChange={(e) => {
                                    setFormValues({ ...formValues, repeatPassword: e.target.value })
                                }} />
                            </Form.Group>
                            <div className="form-bottom-container">
                                <Button variant="primary" type="submit">
                                    Signup
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
        </ImageBackground >
    )
}

export default Signup
