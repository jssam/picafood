import React from "react";
import{Text,StyleSheet,FlatList,View, Image} from "react-native";


const Resultbox=({pass})=>{

    return(
        <View>
            <Image source={{ uri : pass.image_url}} style={styles.image}/>
            <Text style={styles.container1}>{pass.name}</Text>
    <Text style={styles.sam} >{pass.rating} Stars   {pass.review_count} Reviews</Text>

        </View>
    );

};

    const styles = StyleSheet.create({
        container:{
            marginLeft:15,
            fontSize:18,
            fontWeight:"bold"
        },
        image:{
            width:240,
            height:120,    marginLeft:15,
            borderRadius:5
        },container1:{
            marginLeft:15,
            fontSize:12,
            fontWeight:"bold"
        },
        sam:{
            marginLeft:15
        }
        
        });
 export default Resultbox;