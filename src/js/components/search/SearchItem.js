import React from 'react';

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
            </div>
        )
    }
}

export default SearchItem;