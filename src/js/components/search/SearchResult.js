import React from 'react';
import SearchItem from './SearchItem';
import SearchDetailItem from './SearchDetailItem';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasActiveItem: false,
        };

        this.showDetails = this.showDetails.bind(this);
    }

    showDetails(id) {
        this.setState({activeItem: id, hasActiveItem: !this.state.hasActiveItem});
    }
    closeDetails(){
        this.setState({hasActiveItem: false});
    }
    render() {
        const result = this.props.result;
        const {activeItem, hasActiveItem} = this.state;
        let counter = 0;

        const data = Object.keys(result).map((key) => {
            counter++;
            const item = result[key];
            let className = '';
            if(hasActiveItem){
                if(counter !== activeItem){
                    return false;
                }

                className = 'full-width-card';
                const {title, long_description, media, location} = item;

                return <SearchDetailItem
                    title={title}
                    description={long_description}
                    media={media}
                    location={location}
                    alternatives={[]}
                    closeDetails={() => this.closeDetails()}
                    key={counter}
                    id={counter}
                />;
            }

            return <SearchItem className={className} key={counter} item={item} id={counter} showDetails={(id) => this.showDetails(id)}/>;
        });


        return (
            <section className="search-results">
                {data}
            </section>
        )
    }
}

export default SearchResult;