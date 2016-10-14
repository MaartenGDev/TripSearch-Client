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
                searchHtml: '',
                result_title: '',
                data: {},
            }
        };

        this.search = this.search.bind(this);
        this.handleTypeEvent = this.handleTypeEvent.bind(this);
        this.highlightKeywords = this.highlightKeywords.bind(this);
        this.resetTextSearch = this.resetTextSearch.bind(this);
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
                    searchHtml: data.search,
                    result_title: data.result_title,
                    data: data.data,
                }
            }));
    }

    getSuggestions(startPos, anchorOffset, target) {

        let form = new FormData();
        form.append('search', this.state.result.search);

        fetch('https://search.dev/analyse.php', {
            method: 'POST',
            body: form
        })
            .then((res) => res.json())
            .then((data) => {

                this.resetTextSearch(target);

                this.setState({
                    analyseResult: data
                });


                this.setState({
                    result: {
                        search: this.state.result.search,
                        searchHtml: this.stripHtml(this.state.result.searchHtml),
                        data: this.state.result.data,
                        result_title: this.state.result.result_title
                    }
                });


            });


    }

    resetTextSearch(target) {



    }

    highlightKeywords(sentence) {
        let searchHtml = this.stripHtml(sentence);

        const analyseResult = this.state.analyseResult;

        let replacements = [];

        Object.keys(analyseResult).forEach((key) => {
            const item = analyseResult[key];

            let search = searchHtml.substr(item.start, item.end - item.start);

            replacements.push(search);
        });

        replacements.forEach((item) => {
            searchHtml = searchHtml.replace(item, '<span style="color: red">' + item + '</span>');
        });
        return searchHtml;
    }

    stripHtml(html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText;
    }

    handleTypeEvent({target}) {
        const search = this.stripHtml(target.innerText);
        this.setState({
            result: {
                search: search,
                searchHtml: search,
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
                    <SearchBar analyseResult={this.state.analyseResult} onChange={(node) => this.handleTypeEvent(node)}
                               searchQuery={this.state.result.searchHtml}
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
