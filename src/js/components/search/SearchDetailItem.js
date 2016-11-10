import React from 'react';

class SearchDetailItem extends React.Component {


    render() {
        const {id, title, description, media, location, alternatives} = this.props;

        return (
            <section className="result-detail">
                <section className="result-detail__image">
                    <img src={media.main}/>
                </section>
                <section className="result-detail__details">
                    <h1 className="result-detail__details__title">{title}</h1>
                    <p className="result-detail__details__description">{description}</p>

                    <img className="result-detail__close" src="/public/assets/images/closeAction.png" onClick={() => this.props.closeDetails()}/>
                    <section className="result-detail__buttons">
                        <button className="btn btn-primary result-detail__button--first">Toon Alternatief</button>
                        <button className="btn btn-default result-detail__button">Toon op kaart</button>
                    </section>
                </section>

            </section>
        )
    }
}

export default SearchDetailItem;
