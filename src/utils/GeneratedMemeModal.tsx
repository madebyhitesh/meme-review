import React from 'react'
import { Button, Container, Modal } from 'react-bootstrap';


export const GeneratedMemeModal = (props: any) => {
    const { data } = props
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <h3>Your awesome meme is ready</h3></Modal.Header>
            <Modal.Body>
                <Container fluid className="d-flex justify-content-center">
                    <div className="modal-image-container">
                        <img src={data.url} alt={data.url} />
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Container fluid className="d-flex justify-content-center">
                    <Button as="a" href={data.url} download variant="success" block className="font-weight-bold">
                        Download
                    </Button>
                </Container>
            </Modal.Footer>
        </Modal>
    )
}
