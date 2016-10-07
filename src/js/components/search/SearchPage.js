import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from './SearchBar';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {}
        };

        this.search = this.search.bind(this);
    }

    search() {
        let form = new FormData();

        form.append('search', document.getElementById('search').value);

        fetch('https://search.dev/', {
            method: 'POST',
            body: form
        })
            .then((res) => res.json())
            .then((data) => this.setState({result: data}));

    }

    render() {
        return (
            <main className="card">
                <SearchBar search={() => this.search()}/>
                <SearchResult result={this.state.result}/>
            </main>
        )
    }
}
export default SearchPage;
