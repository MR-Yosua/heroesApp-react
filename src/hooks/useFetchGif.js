import { useState, useEffect } from 'react'
import { getGifs } from '../selectors/getGifs'


export const useFetchGif = (heroeurl) => {

    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        
        getGifs(heroeurl).then(resp=>{
            // console.log(resp);
            setstate({
                data:resp.images?.downsized_large.url,
                loading:false
            });
        });

    }, [heroeurl])
    
    return state;

    
}
