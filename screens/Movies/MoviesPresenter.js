import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import MovieItem from "../../components/MovieItem";
import { BG_COLOR } from "../../constants/Colors";
import Section from "../../components/Section";

const Container = styled.ScrollView`
    background-color:${BG_COLOR};
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
    loading ? (
        <Loader />
    ) : (
            <Container>
                {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
                {upcoming ?
                    <Section title="Upcoming Movies">
                        {upcoming
                            .filter(movie => movie.poster_path !== null)
                            .map(movie => (
                                <MovieItem
                                    id={movie.id}
                                    posterPhoto={movie.poster_path}
                                    title={movie.title}
                                    voteAvg={movie.vote_average}
                                    key={movie.id} />
                            ))}
                    </Section> : null}
                {popular ?
                    <Section horizontal={false} title="Popular Movies">
                        {popular
                            .filter(movie => movie.poster_path !== null)
                            .map(movie => (
                                <MovieItem
                                    horizontal={true}
                                    id={movie.id}
                                    posterPhoto={movie.poster_path}
                                    title={movie.title}
                                    voteAvg={movie.vote_average}
                                    overview={movie.overview}
                                    key={movie.id} />
                            ))}
                    </Section> : null}
            </Container>
        );

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array
}

export default MoviesPresenter;