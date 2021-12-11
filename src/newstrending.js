import React,{useEffect,useState} from 'react'
import useNewstrendingapi from './useNewstrendingapi'
import trendingarray from './trendingarray';
import {Link} from "react-router-dom"
const Newstreding = () => {
  
    // console.log(getquery)
    useNewstrendingapi();
   
    return (
        
        <div>
            <h1>Trending news</h1>
            {
             trendingarray.map((v)=>{
                 return (
                   <div key={v.id}>
                     <p ><Link to={`/trending/${v.id}`}>{v.name}</Link></p>
                     
                    </div>
                 )
             })
            }
        </div>
    )
}
export default  Newstreding