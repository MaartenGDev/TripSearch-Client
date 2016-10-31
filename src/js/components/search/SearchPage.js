import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from './SearchBar';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            result: {
                search: '',
                result_title: '',
                data: {},
            }
        };

        this.search = this.search.bind(this);
        this.handleTypeEvent = this.handleTypeEvent.bind(this);
    }

    search() {
        let form = new FormData();
        form.append('search', this.state.result.search);

        fetch('https://search.dev/', {
            method: 'POST',
            body: form
        })
            .then((res) => res.json())
            .then((data) => this.setState({
                result: {
                    search: data.search,
                    result_title: data.result_title,
                    data: data.data,
                }
            }));
    }


    handleTypeEvent({target}) {
        this.setState({
            searchQuery: target.value
        });
    }

    render() {
        const hasResult = 'attraction' in this.state.result.data;

        const markers = [{
            position: {
                lat: 52.3747388,
                lng: 4.7585316,
            },
            key: "parking",
            defaultAnimation: 2,
        }];

        const Map = withGoogleMap(setting => (
            <GoogleMap
                defaultZoom={16}
                defaultCenter={{lat: 52.3747388, lng: 4.7585316}}
            >
                {markers.map(marker => (
                    <Marker
                        {...marker}
                    />
                ))}
            </GoogleMap>
        ));


        return (
            <main>
                <Map
                    containerElement={
                        <div style={{height: `200px`}}/>
                    }
                    mapElement={
                        <div style={{height: `200px`}}/>
                    }
                />
                <section className="card">
                    <SearchBar onChange={(e) => this.handleTypeEvent(e)} searchQuery={this.state.searchQuery} search={() => this.search()}/>
                </section>

                {hasResult ? <section className="card planner-search-result-preview">
                    <SearchResult title={this.state.result.result_title} result={this.state.result.data}/>
                </section> : null}
            </main>
        )
    }
}
export default SearchPage;
