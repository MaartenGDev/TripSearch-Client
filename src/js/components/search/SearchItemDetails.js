import React from 'react';

const SearchItemDetail = (props) => {
    const isActive = props.isActive;

    if (isActive) {
        return (
            <div className="result-item-detail">
                <div className="result-item-detail-image">
                    <img src={props.image}/>
                </div>
                <div className="result-item-detail-description">
                    <p>{props.description}</p>
                </div>
            </div>
        )
    }
    return null;

};

export default SearchItemDetail;