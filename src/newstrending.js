import React,{useEffect,useState} from 'react'
import useNewstrendingapi from './useNewstrendingapi'
const Newstreding = () => {
  
    // console.log(getquery)
    const getquery = useNewstrendingapi();
    console.log(getquery)
    return (
        
        <div>
            <h1>Trending news</h1>
            {
            
             getquery.map((v)=>{
                 return (
                     <p>{v.name}</p>
                 )
             })
            }
        </div>
    )
}
export default  Newstreding