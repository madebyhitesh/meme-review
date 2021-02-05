import React from 'react'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'


const SearchComponent: React.FC = () => {
    return (
        <Container fluid className="bg-black py-3">
            <Container className="w-75 text-center text-light">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum debitis.</h2>
            </Container>

            <Container className="w-75 mt-3">
                <FormControl placeholder="Search the template" />

            </Container>
        </Container>
    )
}

export { SearchComponent }
