import { useEffect, useState } from "react/cjs/react.development"
import { getGif } from "../helpers/GetGif";

export const useFetchGifs = (category) => {
    const [state,setState]=useState({
        data: [],
        loading:true
    });

    useEffect(() => {
        
        getGif(category).then(imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false 
                })
            }, 0);
                
        })
    
    },[category])
     

    return state
}