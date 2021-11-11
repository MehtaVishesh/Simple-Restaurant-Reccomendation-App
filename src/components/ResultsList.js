import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style = {styling.container}>
            <Text style = {styling.titleStyle}>{ title }</Text>
            <FlatList
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {results}
                keyExtractor = {(result) => result.id}
                renderItem = {({item}) => {
                    return (
                    <TouchableOpacity onPress = {() => navigation.navigate('ResultShow', {id: item.id})}>
                        <ResultsDetail result = {item}/>
                    </TouchableOpacity>
                    )
                }}
                />
        </View>
    );
};

const styling = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color : 'white',
        marginLeft: 15,
        marginBottom: 5,
    },

    container: {
        marginBottom: 15,
    }
});

export default withNavigation(ResultsList);