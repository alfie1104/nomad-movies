import React from "react";
import styled from "styled-components"
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
    background-color:${BG_COLOR};
`;

const TVPresenter = ({ loading, popular, airingThisWeek, airingToday }) => (
    loading ? <Loader />
        : <Container>
            {airingToday ? (
                <Section title="Airing Today">
                    {airingToday
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                            <MovieItem
                                isMovie={false}
                                id={tv.id}
                                posterPhoto={tv.poster_path}
                                title={tv.name}
                                voteAvg={tv.vote_average}
                                key={tv.id} />
                        ))}
                </Section>
            ) : null}
            {airingThisWeek ? (
                <Section title="Airing This Week">
                    {airingThisWeek
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                            <MovieItem
                                isMovie={false}
                                id={tv.id}
                                posterPhoto={tv.poster_path}
                                title={tv.name}
                                voteAvg={tv.vote_average}
                                key={tv.id} />
                        ))}
                </Section>
            ) : null}
            {popular ? (
                <Section title="Popular">
                    {popular
                        .filter(tv => tv.poster_path !== null)
                        .map(tv => (
                            <MovieItem
                                isMovie={false}
                                horizontal={true}
                                id={tv.id}
                                posterPhoto={tv.poster_path}
                                title={tv.name}
                                voteAvg={tv.vote_average}
                                key={tv.id} />
                        ))}
                </Section>
            ) : null}
        </Container>
);

TVPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    airingThisWeek: PropTypes.array,
    airingToday: PropTypes.array
};

export default TVPresenter;