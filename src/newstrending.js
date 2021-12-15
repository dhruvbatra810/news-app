import React,{useRef, useEffect,useState} from 'react'
import useNewstrendingapi from './useNewstrendingapi'
import './stylefornewstrending.css'
import {Link,useNavigate} from "react-router-dom"
const Newstreding = ({wow}) => {
    const {trendingarray,settrendingarray,v} = wow;
    const [offset,setoffset] =useState(0);

    useNewstrendingapi(settrendingarray,trendingarray,offset);
    useEffect(()=>{

    },[offset])
    

   const onScroll = (e) => {
   const bottom = e.target.scrollHeight - Math.ceil(e.target.scrollTop)-300;
    if (bottom  === e.target.clientHeight-300 || bottom  === e.target.clientHeight-300+1|| bottom  === e.target.clientHeight-300-1 )  { setoffset(offset+10);}
  
  };
const navigate = useNavigate();
  //sipe 
  var startingX , startingY , movingX , movingY ;
  	function touchStart(evt){
						startingX = evt.touches[0].clientX ;
						startingY = evt.touches[0].clientY ;
						}
						function touchMove(evt){
						movingX = evt.touches[0].clientX ;
						movingY = evt.touches[0].clientY ;
						}
						function touchEnd(){
						if(startingX+100 < movingX){
											 navigate(`/${v}`);
						} else if(startingX-100 > movingX){
                           console.log('left');
												}
					 
					 if(startingY+100 < movingY){
					 						console.log('down');
					 } else if(startingY-100 > movingY){
					 						console.log('up');
					 						}
						}  
    return (
        
        <div style={{backgroundColor:'whitesmoke'}} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
            <h1><b>Trending</b> news</h1>
            <div style={{height:"600px",overflow:"scroll"}} onScroll={onScroll}>
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