import React from 'react';
import SearchItem from './SearchItem';

const SearchResult = (props) => {
    const result = props.result;
    let counter = 0;

    const data = Object.keys(result).map((key) => {
        counter++;
        const item = result[key];
        console.log(key);
        console.log(key === 'parking');
        return <SearchItem key={counter} item={item} showMap={key === 'parking'}/> ;
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