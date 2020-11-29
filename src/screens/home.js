import React, { useState,useEffect } from "react";
import{Text,StyleSheet,FlatList,View, ImageBackground,ScrollView} from "react-native";
import Search from "../components/Search";
import yelp from "../api/yelp";
import Resultscomp from "../components/Resultscomp";

const home =  ({navigation})=>{
 
    const[term, changeterm]=useState("pasta")
    const[result,nextresult]= useState([])
    const[error, changeerror]=useState("")
    const searchApi=async(term)=>{
      try{
      const response = await yelp.get("/search",
      {params:{
        limit:50,
        term: term,
        location:"san jose"
      
      }

    }
    );
      nextresult(response.data.businesses);
  } catch(err){
    changeerror("something went wrong please check your connection")
  }
    };

useEffect(()=>{
searchApi("momo")
},[]);

const filterresults= (price)=>{
   return result.filter(result=>
    {return result.price===price});

};

return(
<View style={styles.search1}>
   <ScrollView>

<Search titile ={term} change={newterm =>changeterm(newterm)} karsubmit={()=>searchApi({term})}></Search>
{error?<Text>{error} </Text>:null}
<Resultscomp navigation={navigation} result= {filterresults("$")} pricelabel="Low Price"/>
<Resultscomp  navigation={navigation} result= {filterresults("$$")} pricelabel="Medium Price"/>
<Resultscomp  navigation={navigation} result= {filterresults("$$$")} pricelabel="Heigh Price"/>
</ScrollView>
</View>

    );
};
const styles = StyleSheet.create({ search1: {
    width:"100%",
    height:"100%",
   flex:1,
    marginVertical:10,

    padding: 0
  },container3: {
        
    width:"90%",
    height:"90%",
    alignSelf: "center",
    
  },});
export default home;