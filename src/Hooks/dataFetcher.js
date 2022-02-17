import { useState,useEffect } from "react";
import { getStories } from "../Utils/apis";

//declaring a custom hook 
const useDataFetcher = (type) => {
    //declaring two state variables
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
//maakin the api call
 useEffect(() =>{
     setIsLoading(true);
     getStories(type)//when you click the nav menu the type willchange and useeffect hook will run again
     .then((stories) => {
         setStories(stories);
         setIsLoading(false);
     }
     ).catch (() => {
         setIsLoading(false);//incase of an error the loader will be hidden.
     });
 }, [type]);
 
 return { isLoading, stories };
};

export default useDataFetcher;