import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="planner-search">
            <input className="search-input" type="text" id="search" />
            <button id="search_button" className="search-input btn btn-primary" onClick={props.search}>Search</button>
        </div>
    )
};

export default SearchBar;