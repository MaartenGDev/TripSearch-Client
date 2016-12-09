import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          searchQuery: '',
        };

        this.search = this.search.bind(this);
        this.handleTypeEvent = this.handleTypeEvent.bind(this);
    }

    handleTypeEvent(e) {
        this.setState({
            searchQuery: e.target.value
        });

    }

    search() {
        let form = new FormData();
        const searchQuery = this.state.searchQuery;

        form.append('search', searchQuery);

        fetch('https://search.dev/', {
            method: 'POST',
            body: form
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    result: {
                        search: data.search,
                        result_title: data.result_title,
                        data: data.data,
                    },
                    searchQuery: data.search
                });

                this.props.showResult(data);
            });
    }

    render() {
        return (
            <div className="planner-search planner-search-bar">
                <i id="search-button" className="fa fa-search" aria-hidden="true" onClick={this.search} />
                <input type="text" className="search-input" id="search" onChange={this.handleTypeEvent}
                       value={this.state.searchQuery}/>
            </div>
        )
    }
}
export default SearchBar;