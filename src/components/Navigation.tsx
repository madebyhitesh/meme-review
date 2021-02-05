import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'




const Navigation: React.FC = () => {
    return (
        <Navbar sticky="top" className="d-flex flex-*-fill bg-black" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/" className="font-weight-bold">
                Meme<span className="text-warning">Review</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mr-auto font-weight-regular justify-content-center justify-self-center " style={{ flex: 1 }} activeKey="/">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/ranking">Rankings</Nav.Link>
                    <Nav.Link href="/ranking">About us</Nav.Link>
                    <Nav.Link href="/ranking">Contact</Nav.Link>
                </Nav>
                <Nav className="d-sm-flex flex-row jusify-conter">
                    <Nav.Item >
                        <Button variant="outline-light font-weight-bold">Sign Up</Button>
                    </Nav.Item>
                    <Nav.Item className="ml-2">
                        <Button variant="warning font-weight-bold">Login</Button>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
