import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { MemeContext } from '../ContextApi/MemeContext'
import { MemeComponent } from '../utils/MemeComponent'
import { SearchComponent } from '../utils/SearchComponent'

const HomePage: React.FC = () => {

    const memesData = useContext(MemeContext)
    return (
        <>
            <SearchComponent />
            <Container fluid className="home-meme-container">
                {memesData && memesData.map(({ url, box_count, height, id, name, width }) => (
                    <MemeComponent name={name} url={url} key={id} />
                ))
                }
            </Container>

        </>
    )
}

export default HomePage
