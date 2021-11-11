import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    return(
        <View style = {styling.container}>
            <Image style = {styling.image} source = {{uri: result.image_url}} />
            <Text style = {styling.name}>{result.name}</Text>
            <Text style = {styling.critic}>{result.rating} stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styling = StyleSheet.create({
    container: {
        marginLeft: 15,
    },

    image: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 5,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },

    critic: {
        color: 'white',
    }
});

export default ResultsDetail;