import React from 'react';
import {Text, View, StyleSheet, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { registerRootComponent } from 'expo';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style = {styling.backgroundStyle}>
            <EvilIcons name = "search" style = {styling.iconStyle} />
            <TextInput 
                style = {styling.inputStyle}
                placeholder = "Search"
                autoCapitalize = 'none'
                autoCorrect = {false}
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing={onTermSubmit}/>
        </View>
    )
}

const styling = StyleSheet.create({

    backgroundStyle: {
        backgroundColor: 'gray',
        height: 40,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    
    inputStyle: {
        flex: 1,
    },

    iconStyle: {
        fontSize: 30,
        padding: 7.5
    }
})

export default SearchBar;