import React from 'react';

const SearchBar = (props) => {

    let searchQuery = props.searchQuery;
    const analyseResult = props.analyseResult;
    let replacements = [];
    Object.keys(analyseResult).forEach((key) => {
        const item = analyseResult[key];

        let search = searchQuery.substr(item.start, item.end - item.start);

        replacements.push(search);
    });

    replacements.forEach((item) => {
        return searchQuery = searchQuery.replace(item, '<span style="color: red">' + item + '</span>');
    });

    return (
        <div className="planner-search">
            <i id="search-button" className="fa fa-search" aria-hidden="true" onClick={props.search}></i>
            <div contentEditable="true" className="search-input" id="search" onKeyUp={props.onChange}
                 dangerouslySetInnerHTML={{__html: searchQuery}}/>
        </div>
    )
};

export default SearchBar;