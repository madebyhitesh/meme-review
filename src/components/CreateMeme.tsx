import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { IGenerateMeme, IMeme, IGeneratedMeme } from '../@types/interfaces';
import { MemeContext } from '../ContextApi/MemeContext';
import { GeneratedMemeModal } from '../utils/GeneratedMemeModal';
import { MemeComponent } from '../utils/MemeComponent';


const generateLink = (obj: IGenerateMeme): string => {
    let link: any = [];
    Object.entries(obj).forEach((item) => {
        link.push(`${item[0]}=${item[1]}`)
    })

    return link.join("&");
}

const CreateMeme: React.FC = () => {
    const memesData = useContext(MemeContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [inputValues, setInputValues] = useState<any>({})
    const [generatedMemeData, setGeneratedMemeData] = useState<IGeneratedMeme | null>(null)
    const location = useLocation<IMeme>()
    const { box_count, id, name, url }: IMeme = location.state;
    let numberofinputs: any = []

    for (let index: number = 0; index < box_count; index++) {
        let key: string = `text${index}`
        numberofinputs.push(
            <Form.Control
                placeholder={`Enter text #${index + 1}`}
                type="text"
                className="mb-2"
                key={index + 1}
                onChange={(e: any) => {
                    let value: any = (e.target.value)
                    const property = {
                        [key]: value
                    }
                    setInputValues(() => ({ ...inputValues, ...property }))
                }}

            />

        )
    }

    async function handleGenerateMeme(e: any) {
        e.preventDefault()
        setIsLoading(true)
        const body: IGenerateMeme = {
            template_id: id,
            password: process.env.REACT_APP_PASSWORD,
            username: process.env.REACT_APP_USERNAME,
        }


        const templateData: string = generateLink({ ...body, ...inputValues });

        try {
            const makeMeme: any = await fetch(`https://api.imgflip.com/caption_image?${templateData}`, {
                method: "POST"
            })
            const response = await makeMeme.json();
            const data = response.data
            setIsLoading(false)
            setInputValues({})
            setGeneratedMemeData(data)
            setShowModal(true)
        } catch (error) {
            console.log(error)
        }


    }



    return (
        <div className="create-meme-page">
            <Container fluid className="text-center text-light bg-warning py-1">
                <h3>{name}</h3>
            </Container>
            {
                generatedMemeData &&

                <GeneratedMemeModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    data={generatedMemeData}
                />
            }

            <Container fluid className="`py-3">
                <Row>
                    <Col xs={12} sm={true} className="w-100 py-3">
                        <div className="create-meme-template">
                            <img src={url} alt={name} />
                        </div>
                    </Col>
                    <Col xs={12} sm={true} className="my-auto py-3">
                        <Form className="w-100 m-auto" onSubmit={handleGenerateMeme}>
                            {numberofinputs}
                            <Button type="submit" variant="warning" className="font-weight-bold" disabled={isLoading} block>
                                {
                                    isLoading ?
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        /> :
                                        "Create Meme"
                                }

                            </Button>
                            <Button as="a" href={url} download={`${name}.jpg`} title={name} variant="success" block>
                                Download Template
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="text-center text-light py-1">
                <h3>Other Meme Templates</h3>
            </Container>
            <Container fluid className="home-meme-container mt-2">
                {
                    memesData && memesData.slice(0, 20).map(({ url, box_count, height, id, name, width }) => (
                        <MemeComponent
                            name={name}
                            url={url}
                            id={id}
                            key={id}
                            box_count={box_count}
                            height={height}
                            width={width}
                        />
                    ))
                }
            </Container>

        </div>
    )
}

export default CreateMeme
