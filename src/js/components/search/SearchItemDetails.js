import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const SearchItemDetail = (props) => {
        const isActive = props.isActive;

        const markers = [{
            position: {
                lat: props.location.lat,
                lng: props.location.lon,
            },
            key: "parking",
            defaultAnimation: 2,
        }];
        if (isActive) {

            const Map = withGoogleMap(test => (
                <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{lat: props.location.lat, lng: props.location.lon}}
                >
                    {markers.map(marker => (
                        <Marker
                            {...marker}
                        />
                    ))}
                </GoogleMap>
            ));


            let content = null;


            if (props.showMap) {
                content = (
                    <div className="result-item-detail">
                        <Map
                            containerElement={
                                <div style={{height: `200px`}}/>
                            }
                            mapElement={
                                <div style={{height: `200px`}}/>
                            }
                        />
                    </div>
                )
            } else {
                content = (
                    <div className="result-item-detail">

                        <div className="result-item-detail-image">
                            <img src={props.image}/>
                        </div>
                        <div className="result-item-detail-description">
                            <p> {props.description}</p>
                        </div>
                    </div>
                )
            }
            return content
        }

        return null;
    }
    ;

export default SearchItemDetail;