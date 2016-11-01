import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from './SearchBar';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";


class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {
                search: '',
                result_title: '',
                data: {},
            }
        };

        this.showResult = this.showResult.bind(this);
    }

    showResult(data) {
        this.setState({
            result: data
        })
    }

    render() {
        let markers = [];
        let defaultCenter = {lat: 52.3747388, lng: 4.7585316};
        if ('attraction' in this.state.result.data) {
            const {attraction, parking, shop} = this.state.result.data;

            defaultCenter = {
                lat: attraction.location.lat,
                lng: attraction.location.lon
            };
            markers = [
                {
                    position: {
                        lat: attraction.location.lat,
                        lng: attraction.location.lon,
                    },
                    key: 'attraction',
                    defaultAnimation: 2
                },
                {
                    position: {
                        lat: parking.location.lat,
                        lng: parking.location.lon,
                    },
                    key: "parking",
                    defaultAnimation: 2,
                },
                {
                    position: {
                        lat: shop.location.lat,
                        lng: shop.location.lon,
                    },
                    key: "shop",
                    defaultAnimation: 2,
                },
            ];
        }


        const Map = withGoogleMap(test => (
            <GoogleMap
                defaultZoom={16}
                disableDefaultUI={true}
                defaultCenter={defaultCenter}>
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
                        <div style={{height: `100%`}}/>
                    }
                    mapElement={
                        <div style={{height: `100%`}}/>
                    }
                />
                <SearchBar showResult={(data) => this.showResult(data)} placeholder={this.state.searchQuery}/>

                <SearchResult title={this.state.result.result_title} result={this.state.result.data}/>
            </main>
        )
    }
}
export default SearchPage;
