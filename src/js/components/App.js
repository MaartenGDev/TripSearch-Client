import React, {PropTypes} from 'react'
import Header from './common/Header';
import Helmet from "react-helmet";

class App extends React.Component{
    render() {
        return (
            <div>
                <Header/>
                <Helmet
                    htmlAttributes={{"lang": "en", "amp": undefined}}
                    title="TripSearch"
                    titleTemplate="TripSearch - %s"
                    defaultTitle="My Default Title"
                    base={{"target": "_blank", "href": "http://tripsearch.dev/"}}
                    meta={[
                        {"name": "description", "content": "TripSearch Application"},
                    ]}
                    script={[
                        {"src": "https://maps.googleapis.com/maps/api/js?key=TOKEN_HERE&callback=initMap", "type": "text/javascript"}
                    ]}
                />
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;