import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";

import SearchItemDetail from './SearchItemDetails';

class SearchItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
        };

        this.showDetails = this.showDetails.bind(this);
    }

    showDetails(){
        this.setState({isActive: !this.state.isActive});
    }

    render(){
        const {icon, title,location,media,long_description} = this.props.item;
        const city = location.city.substr(0,1).toUpperCase() + location.city.substr(1).toLowerCase();

        return (
            <div className="result-item" onClick={() => this.showDetails()}>
                <div className="result-item-icon"><i className={'fa fa-' + icon} /></div>
                <div className="result-item-details">
                    <p className="result-item-title"><b>{title}</b></p>
                    <p className="result-item-location">{city + ' ' + location.address}</p>
                </div>
                <SearchItemDetail showMap={this.props.showMap} location={location} isActive={this.state.isActive} image={media.details} description={long_description}/>
            </div>
        )
    }
}

export default SearchItem;