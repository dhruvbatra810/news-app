import React,{useEffect,useState} from 'react'
import useNewstrendingapi from './useNewstrendingapi'
import './stylefornewstrending.css'
import {Link} from "react-router-dom"
const Newstreding = ({wow}) => {
    const {trendingarray,settrendingarray} = wow;
    // console.log(wow.trendingarray)
    useNewstrendingapi(settrendingarray);
//    console.log(trendingarray)
    return (
        
        <div style={{backgroundColor:'whitesmoke'}}>
            <h1><b>Trending</b> news</h1>
            <div style={{height:"36rem",overflow:"scroll"}}>
            {
             trendingarray.map((v)=>{

                    
                    const {thumbnail} = v.image || {thumbnail:{contentUrl:"https://cima-afrique.org/cima/images/not-available.png"}};
                     const ff = thumbnail.contentUrl ||"https://cima-afrique.org/cima/images/not-available.png";
                    
                 
                 return (
                    <div key={v.id} className='outsidecard'> 
                   <div  className='card' style={{backgroundColor:'white',margin:"3.5vw",borderRadius:'25px'}}>
                     <img src={ff} alt="img not availabe" style={{width:"100%",borderRadius:'25px'}} />
                     <div className='contain'>
                     <h5 style={{marginTop:'1rem'}}><Link className='text-dark'  to={`/trending/${v.id}`}>{v.name ||"this name is fake"}</Link></h5>
                     </div>
                    </div>
                    </div>
                 )
             })
            }
            </div>
        </div>
    )
}
export default  Newstreding