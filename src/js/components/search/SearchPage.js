import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from './SearchBar';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            analyseResult: {},
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
            .then((data) => this.setState({result: data}));

    }

    getSuggestions(){
        let form = new FormData();

        form.append('search', this.state.result.search);

        fetch('https://search.dev/analyse.php', {
            method: 'POST',
            body: form
        })
            .then((res) => res.json())
            .then((data) => this.setState({analyseResult: data}));
    }

    handleTypeEvent({target}) {
        this.getSuggestions();
        this.setState({
            result: {
                search: target.innerHTML,
                result_title: this.state.result.result_title,
                data: this.state.result.data,
            }
        });
    }

    render() {
        const hasResult = 'attraction' in this.state.result.data;

        const mainBackground = hasResult ? this.state.result.data['attraction'].media.main : '';
        const detailsBackground = hasResult ? this.state.result.data['attraction'].media.details : '';

        return (
            <main>
                <section className="card">
                    <SearchBar analyseResult={this.state.analyseResult} onChange={this.handleTypeEvent} searchQuery={this.state.result.search}
                               search={() => this.search()}/>
                </section>

                {hasResult ? <section className="card planner-search-result-preview"
                         style={ hasResult ? {backgroundImage: 'url(' + mainBackground + ')'} : null}>
                    <SearchResult title={this.state.result.result_title} result={this.state.result.data}/>
                </section> : null}
            </main>
        )
    }
}
export default SearchPage;
