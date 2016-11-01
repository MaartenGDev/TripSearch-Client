import React from 'react';

class SearchItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
        };

        this.showDetails = this.showDetails.bind(this);
    }

    showDetails() {
        this.setState({isActive: !this.state.isActive});
    }

    render() {
        const {icon, title, location, media, long_description} = this.props.item;
        const city = location.city.substr(0, 1).toUpperCase() + location.city.substr(1).toLowerCase();
        const description = long_description.substr(0, 80) + '...';
        console.log(media);
        return (
            <section className="result--item" onClick={() => this.showDetails()}>
                <img className="result--item--image" src={media.main}/>
                <section className="result--item--details">
                    <h1 className="result--item--details--title">{title}</h1>
                    <p className="result--item--details--description">{description}</p>
                </section>
                <section className="result--item--actions">
                    <section>Details</section>
                    <section>Alternatief</section>
                </section>
            </section>
        )
    }
}

export default SearchItem;