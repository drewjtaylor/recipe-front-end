import React, {useRef} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import baseUrl from '../util';



const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/users`, {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            password: passwordRef.current.value
        })
        .then(response => console.log(response.data.status))
        .catch(err => console.log(err.response.data.message))
    }

  return (
    <Container>
        <h4>If you register an account, you will be able to save recipes as favorites, and save banned ingredients in case you have allergies (or just really don't like something... for me it's mushrooms)</h4>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control ref={emailRef} className="mb-3" type="email" placeholder="Enter email here"/>
            </Form.Group>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control ref={usernameRef} className="mb-3" type="username" placeholder="Pick a username"/>
            </Form.Group>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control ref={firstNameRef} className="mb-3" type="name" placeholder="Enter your first name"/>
            </Form.Group>
            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control ref={lastNameRef} className="mb-3" type="name" placeholder="Enter your last name (optional)"/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} className="mb-3" type="password" placeholder="Enter password here"/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}

export default Register