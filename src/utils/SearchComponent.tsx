import React from 'react'
import { Container } from 'react-bootstrap'
import SearchInput from 'react-search-input'
import { ISearch } from '../@types/interfaces'


const SearchComponent: React.FC<ISearch> = ({ setSearchValue }) => {

    const handleSearch = (value: string) => {
        setSearchValue(value)
    }
    return (
        <Container fluid className="bg-black py-3">
            <Container className="w-100 text-center text-light">
                <h2>We provide you a platform to showcase your <span className="text-warning">memer</span> talent.</h2>
            </Container>

            <Container className="w-75 mt-3">
                <SearchInput className="search-input" onChange={(term: string) => handleSearch(term)} />
            </Container>
        </Container>
    )
}

export { SearchComponent }
