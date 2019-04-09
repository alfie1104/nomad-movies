import React, { Component } from 'react';
import { Text } from "react-native";
import DetailPresenter from "./DetailPresenter";

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
        let error, genres;

        try {

        } catch{

        } finally {
            this.setState({
                loading: false
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