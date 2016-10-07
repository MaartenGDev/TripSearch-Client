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

    componentDidMount() {
        let form = new FormData();

        form.append('search', document.querySelector('.search').value);

        fetch('https://search.dev/', {
            method: 'POST',
            body: form
        })
            .then((res) => res.json())
            .then((data) => this.setState({result: data}));
    }
    search(){
        const searchValue = document.getElementById('search').value;

        console.log(searchValue);
    }
    render() {
        return (
            <div>
                <h1>Search Result Page</h1>
                <SearchBar search={() => this.search()}/>
                <SearchResult result={this.state.result}/>
            </div>
        )
    }
}
export default SearchPage;
