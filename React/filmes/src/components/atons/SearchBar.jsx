import './SearchBar.css';
import React from 'react';

function SearchBar() {
    return (
        <input
        type="text" 
        className='search-bar'
        placeholder="Buscar filme" 
        />
    );
}

export default SearchBar;