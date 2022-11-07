import React, {useRef} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

  return (
    <Container>
        <h4>If you register an account, you will be able to save recipes as favorites, and save banned ingredients in case you have allergies (or just really don't like something... for me it's mushrooms)</h4>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control ref={emailRef} className="mb-3" type="email" placeholder="Enter email here"/>
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