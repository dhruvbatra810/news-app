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
                     <p key={v.id}>{v.name} <Link to=""></Link></p>
                 )
             })
            }
        </div>
    )
}
export default  Newstreding