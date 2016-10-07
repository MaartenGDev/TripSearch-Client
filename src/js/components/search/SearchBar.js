import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="planner-search">
            <input type="text" id="search" />
            <button className="search" onClick={props.search}>Search</button>
        </div>
    )
};

export default SearchBar;