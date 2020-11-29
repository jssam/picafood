import { useState,useEffect } from "react";
import yelp from "../api/yelp";

export default()=>{
const[result,nextresult]= useState([])
const[error, changeerror]=useState("")
const searchApi = async()=>{
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
searchApi("pasta")
},[]);
return[searchApi,result,error];
};
