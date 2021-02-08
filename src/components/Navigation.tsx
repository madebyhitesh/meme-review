import React, { useState } from 'react'
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap'




const Navigation: React.FC = () => {

    // const [isSignUpOpen,setSignUpOpen] =  useState<boolean>(false)
    const [isSignUpOpen, setSignUpOpen] = useState<boolean>(false);
    const [isLogInOpen, setLogInOpen] = useState<boolean>(false);

    const handleSignUpClose = () => setSignUpOpen(false);
    const handleSignUpOpen = () => setSignUpOpen(true);
    const handleLogInClose = () => setLogInOpen(false);
    const handleLogInOpen = () => setLogInOpen(true);
    return (<>
        <Navbar sticky="top" className="d-flex flex-*-fill bg-black w-100" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/" className="font-weight-bold">
                Meme<span className="text-warning">Review</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto font-weight-regular justify-content-center justify-self-center " style={{ flex: 1 }} activeKey="/">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/ranking">Rankings</Nav.Link>
                    <Nav.Link href="/your-meme">Your Memes</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="d-sm-flex flex-row jusify-conter">
                    <Nav.Item >
                        <Button variant="outline-light font-weight-bold" onClick={handleSignUpOpen}>Sign Up</Button>
                    </Nav.Item>
                    <Nav.Item className="ml-2">
                        <Button variant="warning font-weight-bold" onClick={handleLogInOpen}>Login</Button>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Modal
            show={isSignUpOpen}
            onHide={handleSignUpClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton className="bg-black text-light">
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-black">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-light-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="bg-light-black" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-light-white">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="bg-light-black" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-light-white">Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="bg-light-black" />
                    </Form.Group>
                    <Button variant="warning" className="font-weight-bold" type="submit" block>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>

        {/* login form */}

        <Modal
            show={isLogInOpen}
            onHide={handleLogInClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton className="bg-black text-light">
                <Modal.Title>LogIn</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-black">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-light-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="bg-light-black" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-light-white">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="bg-light-black" />
                    </Form.Group>
                    <Button variant="warning" className="font-weight-bold" type="submit" block>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </>)

}

export default Navigation
