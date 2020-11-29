import React from "react";
import{Text,StyleSheet,FlatList,View, ImageBackground} from "react-native";
import {TextInput } from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";


const Search =  ({title,change, karsubmit })=>{
    
return(
    <View style= {styles.serch}>
    <Feather name="search" size={20} style={styles.container1} />
<TextInput style={styles.container}
autoCapitalize = "none"
autoCorrect={false}
placeholder ="search"
value={title}
onChangeText={change}
onEndEditing={karsubmit}

/>

    </View>

    );
};
  const styles = StyleSheet.create({ 
  serch: {
    height:30,
    width:"95%",
    backgroundColor:"#d3d	rgb(168,168,168)",
 
    flexDirection:"row",
    marginHorizontal:10,
    padding: 0, 
    borderRadius:20
    },
  container: {
    height:"100%",
    width:'100%',

    fontSize:20,

  },
  container1: {
    height:"100%",
    width:'8%',
 
    fontSize:20,
    alignContent:"center",
    marginTop:5,
    marginLeft:10
    
  },});
export default Search;