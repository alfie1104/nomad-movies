import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { BG_COLOR, GREY_COLOR } from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Loader from '../../components/Loader';

const Container = styled.View`
    flex:1;
    background-color:${BG_COLOR};
`;

const InputContainer = styled.View`
    align-items : center;
    margin-vertical:20px;
`;

const Input = styled.TextInput`
    background-color:rgba(255,255,255,1);
    width:${Layout.width / 1.6};
    border-radius:20px;
    padding: 10px;
    text-align:center;
`;

const SearchResults = styled.View`
    margin-top : 20px;
`;

const SearchPresenter = ({ loading, movieResults, tvResults, searchTerm, handleSearchUpdate, onSubmitEditing }) => {
    return (
        <Container>
            <InputContainer>
                <Input
                    onChangeText={handleSearchUpdate}
                    onSubmitEditing={onSubmitEditing}
                    value={searchTerm}
                    placeholder="Search movies and tv"
                    placeholderTextcolor={GREY_COLOR}
                />
            </InputContainer>
            <SearchResults>{loading ? <Loader /> : null}</SearchResults>
        </Container>
    );
};

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired
};

export default SearchPresenter;