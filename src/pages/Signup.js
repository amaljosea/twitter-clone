import React, { useState } from 'react'
import Header from '../components/Header'
import ImageBackground from '../components/ImageBackground'
import { Button, Form, Row, Col } from 'react-bootstrap'
import Container from '../components/Container'
import './Signup.css'
import firebaseApp from '../firebase'

const Signup = (props) => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    })
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = await firebaseApp.auth().createUserWithEmailAndPassword(formValues.email, formValues.password)
            console.log(user)
            props.history.push("/");
        } catch (error) {
    
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
                        </Form>
                    </Col>
                </Row>
            </Container>
        </ImageBackground >
    )
}

export default Signup
