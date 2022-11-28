import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { NavLink, Link } from 'react-router-dom';

const RecipeNavbar = (props) => {
    const {user, setUser} = props;

    const emailRef = useRef();
    const passwordRef = useRef();

    const [show, setShow] = useState(false);

    const toggleModal = () => setShow(prev => !prev)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        setUser({email: emailRef.current.value})
        console.log(`the user is`);
        console.log(user)
    }

    const handleLogin = async e => {
        e.preventDefault();
    }

  return (
    <Navbar bg="danger" variant="dark" expand="lg" sticky='top'>
      <Modal show={show} onHide={toggleModal}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Enter your email and password to sign in below</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control ref={emailRef} className="mb-3" type="email" placeholder="Enter email here"/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} className="mb-3" type="password" placeholder="Enter password here"/>
                    </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleLogin} variant='primary' type="submit">Log in </Button>
                <Button onClick={toggleModal} variant='primary'><Link to='register' className='no-link-decoration'>Register</Link></Button>
            </Modal.Footer>
        </Form>
      </Modal>
      
      <Container>
        <Navbar.Brand >Welcome {user.firstName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as='li'><NavLink className='no-link-decoration' to="/">Home</NavLink></Nav.Link>
            <Nav.Link onClick={toggleModal}>Sign in</Nav.Link>
            <Nav.Link as='li'><NavLink className='no-link-decoration' to="register">Register</NavLink></Nav.Link>
            <Nav.Link as='li'><NavLink className='no-link-decoration' to="recipeSearch">Find a Recipe</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RecipeNavbar;