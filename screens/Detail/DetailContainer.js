import React, { Component } from 'react';
import { Text } from "react-native";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from '../../api';

class DetailContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return ({
            title: navigation.getParam("title")
        });
    };

    constructor(props) {
        super(props);
        const { navigation: { state: { params: {
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
        } } } } = props;
        this.state = {
            isMovie: false,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading: true
        };
    }

    async componentDidMount() {
        const { isMovie, id } = this.state;

        let error, genres, overview, status, date, backgroundPhoto;

        try {
            if (isMovie) {
                ({ genres, overview, status, release_date: date, backdrop_path: backgroundPhoto } = await movies.getMovie(id));
            } else {
                ({ genres, overview, status, first_air_date: date, backdrop_path: backgroundPhoto } = await tv.getShow(id));
            }
        } catch (error) {

        } finally {
            this.setState(prev => {
                return {
                    ...prev,
                    loading: false,
                    genres,
                    overview,
                    status,
                    date,
                    backgroundPhoto
                }
            })
        }
    }

    render() {
        const { id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading } = this.state;

        return (
            <DetailPresenter
                id={id}
                posterPhoto={posterPhoto}
                backgroundPhoto={backgroundPhoto}
                title={title}
                voteAvg={voteAvg}
                overview={overview}
                loading={loading}
            />
        );
    }
}

export default DetailContainer;