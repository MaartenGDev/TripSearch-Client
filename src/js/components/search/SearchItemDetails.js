import React from 'react';
import {withGoogleMap, GoogleMap} from "react-google-maps";

const SearchItemDetail = (props) => {
        const isActive = props.isActive;

        if (isActive) {

            console.log(props);
            const Map = withGoogleMap(test => (
                <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{lat: props.location.lat, lng: props.location.lon}}
                />
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
                    </div>)
            } else {
                content = (
                    <div className="result-item-detail">

                        <div className="result-item-detail-image">
                            <img src={props.image}/>
                        </div>
                        <div className="result-item-detail-description">
                            < p > {props.description}</p>
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