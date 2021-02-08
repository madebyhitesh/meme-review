import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Footer: React.FC = () => {
    return (
        <Container fluid className="bg-dark-black py-2 mt-2">
            <Row className="pt-1">
                <Col xl="3" className="py-1">
                    <h2 className="text-light text-weight-bold">Meme<span className="text-warning">Review</span></h2>
                </Col>
                <Col xl="4" className="w-100 d-flex py-1">
                    <ul className="text-light font-weight-bold">
                        <li className="text-light-white font-weight-medium"><p>Support</p></li>
                        <li ><p>Contact us</p></li>
                        <li ><p>FAQ</p></li>
                        <li ><p>Downloads</p></li>
                        <li ><p>About us</p></li>
                        <li ><p>{"Terms & Conditions"}</p></li>
                    </ul>

                    <ul className="text-light font-weight-bold ml-5">
                        <li className="text-light-white font-weight-medium"><p>Serivces</p></li>
                        <li ><p>About Memereview</p></li>
                        <li ><p>Careers</p></li>
                        <li ><p>{"Terms & Conditions"}</p></li>
                        <li ><p>Privacy Policies</p></li>
                        <li ><p>Newsroom</p></li>
                    </ul>

                </Col>
                <Col className="text-light py-1" >
                    <header className="w-100">
                        <p className="font-weight-bold">
                            Stay up to date on the latest from MemeReview
                        </p>
                    </header>
                    <Container fluid className="mt-5 p-0">
                        <Form.Control type="email" placeholder="Enter your email" />
                        <Button variant="warning" className="mt-2 w-25">
                            Submit
                        </Button>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Footer
