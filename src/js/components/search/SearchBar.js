import React from 'react';

const SearchBar = (props) => {


    return (
        <div className="planner-search">
            <i id="search-button" className="fa fa-search" aria-hidden="true" onClick={props.search}></i>
            <div contentEditable="true" className="search-input" id="search" onKeyUp={props.onChange}
                 dangerouslySetInnerHTML={{__html: props.searchQuery}}/>
        </div>
    )
};

export default SearchBar;