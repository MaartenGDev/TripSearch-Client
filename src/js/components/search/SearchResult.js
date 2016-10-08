import React from 'react';
import SearchItem from './SearchItem';

const SearchResult = (props) => {
    const result = props.result;
    let counter = 0;

    const data = Object.keys(result).map((key) => {
        counter++;
        return <SearchItem key={counter} item={result[key]}/> ;
    });

    const title = data.length > 0 ? <p className="planner-search-title">{props.title}</p> : null;

    return (
        <div>
            {title}
            {data}
        </div>
    )
};

export default SearchResult;