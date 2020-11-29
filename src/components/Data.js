import React, { useState, useEffect } from "react";
import{Text,StyleSheet,FlatList,View, Image} from "react-native";
import yelp from "../api/yelp";




const Data=({navigation})=>{
    const id = navigation.getParam('id');
const[result,setresult]= useState('')
const sam =async()=> {
    const mila =await 
    yelp.get(`/${id}`);
   setresult( mila.data);
    
};
useEffect(()=>{
    sam(id);
},[]);

return(<View>
<View style={{flexDirection:'row'}}>

<Text style={styles.say}>Resturant Name:-</Text>
<Text style={styles.sen}> {result.name}</Text></View><View style={{flexDirection:'row'}}>
<Text style={styles.say}>Resturant Phone Number:-</Text>
<Text style={styles.dec}> {result.phone}</Text></View>
<Text style={styles.say}>Some photos for you:-</Text>
<FlatList
data={result.photos}
keyExtractor={(results) =>results}
renderItem={({item})=>{
    return <Image style={styles.san}  source={{uri:item}}/>
}}
/>
</View>
);};
const styles=StyleSheet.create({
san:{
    height:200,width:"100%",
    marginBottom:10,
    borderRadius:4,


},
say:{
    fontWeight:"bold",
    fontSize:20

},
sen:{
    fontSize:20
},
dec:{
    fontSize:15,
    marginTop:4
}

});

export default Data;