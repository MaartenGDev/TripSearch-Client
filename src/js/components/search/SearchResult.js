import React from 'react';
import SearchItem from './SearchItem';

const SearchResult = (props) => {
    const result = props.result;
    let counter = 0;

    const data = Object.keys(result).map((key) => {
        counter++;
        const item = result[key];
        return <SearchItem key={counter} item={item}/> ;
    });


    return (
        <section className="search-results">
            {data}
        </section>
    )
};

export default SearchResult;