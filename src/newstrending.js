import React,{useEffect,useState} from 'react'
import useNewstrendingapi from './useNewstrendingapi'

import {Link} from "react-router-dom"
const Newstreding = ({wow}) => {
    const {trendingarray,settrendingarray} = wow;
    // console.log(wow.trendingarray)
    useNewstrendingapi(settrendingarray);
//    console.log(trendingarray)
    return (
        
        <div>
            <h1>Trending news</h1>
            <div style={{height:"36rem",overflow:"scroll"}}>
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
        </div>
    )
}
export default  Newstreding