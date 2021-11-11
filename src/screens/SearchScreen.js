import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hook/useResults'
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        return results.filter(result => {
                return result.price === price;
            }
        )
    }

    return(
        <View style = {styling.background}>
            <SearchBar term = {term}
             onTermChange = {setTerm}
             onTermSubmit = {() => searchApi(term)}/>
            {errorMessage ? <Text style = {{color: 'white'}}>{errorMessage}</Text> : null}
      
            <ScrollView>
                <ResultsList 
                title = "Cost Effective" 
                results = {filterResultsByPrice('$')}/>
                <ResultsList 
                title = "Expensive" 
                results = {filterResultsByPrice('$$')}/>
                <ResultsList 
                title = "Richie Rich"
                results = {filterResultsByPrice('$$$')}/>
            </ScrollView>
        </View>
    )
}

const styling = StyleSheet.create({
    background: {
        backgroundColor: "black",
        flex: 1,
    }
})

export default SearchScreen;