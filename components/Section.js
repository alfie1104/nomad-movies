import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
    margin-vertical : 20px;
`;

const Title = styled.Text`
    color: white;
    padding-left:20px;
    font-weight:600;
    margin-bottom:15px;
`;

const ScrollView = styled.ScrollView`
    padding-left:20px;
`;

const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <ScrollView horizontal={true}>
            {children}
        </ScrollView>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired
}

export default Section;