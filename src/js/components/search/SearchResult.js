import React from 'react';
import SearchItem from './SearchItem';

const SearchResult = (props) => {
    const result = props.result;
    let counter = 0;

    const data = Object.keys(result).map((key) => {
        counter++;
        return <SearchItem key={counter} item={result[key]}/> ;
    });

    return (
        <div>
            {data}
        </div>
    )
};

export default SearchResult;