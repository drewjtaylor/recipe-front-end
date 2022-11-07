import React, {useRef} from 'react';
import Form from 'react-bootstrap/Form';

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

  return (
    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control ref={emailRef} className="mb-3" type="email" placeholder="Enter email here"/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} className="mb-3" type="password" placeholder="Enter password here"/>
                    </Form.Group>
        </Form>
  )
}

export default Register