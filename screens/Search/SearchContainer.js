import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchPresenter from "./SearchPresenter";

export default class SearchContainer extends Component {
    state = {
        loading: false,
        tvResults: null,
        movieResults: null,
        searchTerm: ""
    }

    handleSearchUpdate = (text) => {
        this.setState({
            searchTerm: text
        });
    }

    render() {
        const {
            loading, movieResults, tvResults, searchTerm
        } = this.props;

        return (
            <SearchPresenter
                loading={loading}
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                handleSearchUpdate={this.handleSearchUpdate}
            />
        );
    }
}

SearchContainer.propTypes = {

};