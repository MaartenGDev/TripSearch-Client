import React from 'react';

const SearchItem = (props) => {
    return (
        <div className="planner-result-item">
            <p>Hello</p>
            <p>Icon {'fa fa-' + props.item.icon}</p>
            <img src={props.item.img}/>
            <p>{props.item.title}</p>
        </div>
    )
};

export default SearchItem;