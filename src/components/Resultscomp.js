import React from "react";
import{Text,StyleSheet,FlatList,View, ImageBackground} from "react-native";
import Resultbox from "./Resultbox";
import { TouchableOpacity } from "react-native-gesture-handler";

const Resultscomp=({pricelabel,result,navigation})=>{



return(<View style={{marginBottom:10}}>

<Text style={styles.container}>{pricelabel}</Text>




<FlatList
horizontal

data={result}
keyExtractor={result=>result.id}
renderItem={({item})=>{
return( 
<TouchableOpacity onPress={()=>navigation.navigate("Home1" , {id : item.id})}>
<Resultbox pass = {item}/>
</TouchableOpacity>);}} 
/>
</View>
);

};
const styles = StyleSheet.create({
container:{
    marginLeft:10,
    fontSize:20,
    fontWeight:"bold"
}

});
export default Resultscomp;