import React from 'react';

class SearchItem extends React.Component {


    render() {
        const {className, id, item} = this.props;
        const {title, location, media, long_description} = item;

        const city = location.city.substr(0, 1).toUpperCase() + location.city.substr(1).toLowerCase();

        const readMoreDots = long_description.length > 80 ? '...' : '';

        const description = long_description.substr(0, 80) + readMoreDots;

        return (
            <section className={"animate pulse result--item result--item-1" + " " + className} onClick={() => this.props.showDetails(id)}>
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