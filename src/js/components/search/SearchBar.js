import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="planner-search">
            <i id="search-button" className="fa fa-search" aria-hidden="true" onClick={props.search}></i>
            <input className="search-input" type="text" id="search" value={props.searchQuery} onChange={props.onChange}/>
        </div>
    )
};

export default SearchBar;