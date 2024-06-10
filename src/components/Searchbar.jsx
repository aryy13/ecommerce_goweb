import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] =useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return(
        <>
<Form onSubmit={handleSearch} className="d-flex">
    <FormControl 
    type="search"
    placeholder="temukan di sini"
    className="me-2"
    aria-label="search"
    value={query}
    onChange={handleInputChange}
/>

<Button variant="outline-succes" type="submit"> Search </Button>
 
</Form> 
 
</> 
    );
}; 

const SearchBox = () => {
    const handleSearch=(query) => {
        console.log('Searching for:', query);
    };

    return (
        <>
        <container> 
            <Row className="my-4">
                <col className="d-flex justify-content-center">
                <SearchBar onSearch={handleSearch} /> 
                </col>
            </Row>
        </container>
        </>
    );
}; 

export default SearchBox; 