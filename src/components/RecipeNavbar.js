import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const RecipeNavbar = () => {
    const [show, setShow] = useState(false);

    const modalRef = useRef();
    modalRef.current = false;

    const toggleModal = () => modalRef.current=!(modalRef.current)

    const handleSubmit = (e) => {
        toggleModal();
        console.log(JSON.stringify(e, null, 2))
    }

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky='top'>
      
      <Modal show={modalRef.current} onHide={toggleModal}>
        <Modal.Header closeButton>
            <Modal.Title>Enter your email and password to sign in below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control className="mb-3" type="email" placeholder="Enter email here" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="mb-3" type="password" placeholder="Enter password here" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={handleSubmit}>Log in </Button>
            <Button variant='primary' onClick={toggleModal}>Sign up </Button>
        </Modal.Footer>
      </Modal>
      
      
      
      <Container>
        <Navbar.Brand href="#home">Recipe Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={toggleModal}>Sign in</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RecipeNavbar;