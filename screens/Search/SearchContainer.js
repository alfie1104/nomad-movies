import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../api";

export default class SearchContainer extends Component {
    state = {
        loading: false,
        tvResults: null,
        movieResults: null,
        searchTerm: "",
        error: null
    }

    handleSearchUpdate = (text) => {
        this.setState({
            searchTerm: text
        });
    }

    onSubmitEditing = async () => {
        const { searchTerm } = this.state;

        if (searchTerm !== "") {
            let loading, movieResults, tvResults, error;

            this.setState({
                loading: true
            });

            try {
                ({
                    data: { results: movieResults }
                } = await movies.searchMovies(searchTerm));
                ({
                    data: { results: tvResults }
                } = await tv.searchTv(searchTerm));
            } catch{
                error = "Can't search";
            } finally {
                this.setState({
                    loading: false,
                    movieResults,
                    tvResults,
                    error
                })
            }
            return;
        }
    }

    render() {
        const {
            loading, movieResults, tvResults, searchTerm, error
        } = this.state;

        return (
            <SearchPresenter
                loading={loading}
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                handleSearchUpdate={this.handleSearchUpdate}
                onSubmitEditing={this.onSubmitEditing}
                error={error}
            />
        );
    }
}

SearchContainer.propTypes = {

};