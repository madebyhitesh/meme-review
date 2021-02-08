import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Container, Pagination } from 'react-bootstrap'
import { IMeme } from '../@types/interfaces'
import { MemeContext } from '../ContextApi/MemeContext'
import { MemeComponent } from '../utils/MemeComponent'
import { SearchComponent } from '../utils/SearchComponent'
import { createFilter } from "react-search-input"


const HomePage: React.FC = () => {

    const memesData = useContext(MemeContext)
    const KEYS_TO_FILTERS = ['name']
    const [searchValue, setSearchValue] = useState<string | null>('')
    const [length, setLength] = useState<number>(1)




    const [activePage, setActivePage] = useState<number>(0)
    const [currentData, setCurrentData] = useState<IMeme[] | null>()
    console.log(currentData)
    let items: any = [];

    const filteredMemes = useMemo(() => memesData && memesData.filter(createFilter(searchValue, KEYS_TO_FILTERS)), [searchValue])

    for (let num: number = 0; num <= length; num++) {
        items.push(
            <Pagination.Item

                key={num}
                active={num === activePage}
                onClick={() => setActivePage(num)}
            >
                {num + 1}
            </Pagination.Item>,
        );
    }

    useEffect(() => {
        setLength(memesData ? Math.round(memesData.length / 24) : 1)
    }, [memesData])

    useEffect(() => {
        const handlePagination = () => {
            if (searchValue) {
                setLength(filteredMemes ? Math.round(filteredMemes.length / 24) : 1)

                //const currentPageData = filteredEmails && filteredEmails.slice(activePage * 24, (activePage + 1) * 24);
                setCurrentData(filteredMemes)
            } else {

                setLength(memesData ? Math.round(memesData.length / 24) : 1)
                const currentPageData = memesData && memesData.slice(activePage * 24, (activePage + 1) * 24);
                setCurrentData(currentPageData)
            }
        }
        handlePagination()
    }, [activePage, memesData, searchValue])


    return (
        <>
            <SearchComponent setSearchValue={setSearchValue} />
            <Container fluid className="text-center text-light bg-warning py-1">
                <h3>Choose your template</h3>
            </Container>
            {currentData && currentData.length > 0 ?
                <Container fluid className="home-meme-container mt-2">
                    {currentData.map(({ url, box_count, height, id, name, width }) => (
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
                </Container> :
                <Container fluid className="text-center mt-3 text-light">
                    <h3>No meme template found for : {searchValue}</h3>
                </Container>
            }
            <Container fluid className="d-flex flex-row justify-content-center mt-3">
                <Pagination size="lg">{items}</Pagination>
            </Container>
        </>
    )
}

export default HomePage
