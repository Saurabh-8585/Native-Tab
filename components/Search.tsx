import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState("");

const updateSearch = (search:any) => {
  setSearch(search);
};
  return (
    <View style={{width:'90%'}}>
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
      lightTheme
      round
      containerStyle={{
        backgroundColor:'white'
      }}
   
      
    />
    </View>
  )
}

export default Search