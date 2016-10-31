import React from 'react';

const SearchBar = (props) => {


    return (
        <div className="planner-search">
            <i id="search-button" className="fa fa-search" aria-hidden="true" onClick={props.search}></i>
            <input type="text"  className="search-input" id="search" onKeyUp={props.onChange} value={props.searchQuery}/>
        </div>
    )
};

export default SearchBar;