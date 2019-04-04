import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { BG_COLOR } from '../../constants/Colors';

const Container = styled.View`
    flex:1;
    background-color:${BG_COLOR};
`;

const Input = styled.TextInput``;

const SearchPresenter = ({ loading, movieResults, tvResults, searchTerm, handleSearchUpdate }) => {
    return (
        <Container>
            <Input
                onChangeText={handleSearchUpdate}
                value={searchTerm}
                autofocus />
        </Container>
    );
};

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired
};

export default SearchPresenter;