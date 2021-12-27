import React,{useEffect,useState} from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom';
import useNewssearchapi from './useNewssearchapi';
import './stylefornewssearch.css'
const Newssearch = ({wow}) => {
    const {searcharray,setsearcharray} = wow;
    const [offset,setoffset] = useState(0);
    const {param1} = useNewssearchapi(setsearcharray,offset,searcharray);
  
    useEffect(()=>{

    },[offset])
    useEffect(()=>{
        setoffset(0);
        
    },[useParams().category])
    const onScroll = (e) => {
   const bottom = e.target.scrollHeight - Math.ceil(e.target.scrollTop) +1000=== e.target.clientHeight+1000;
    if (bottom) { setoffset(offset+10);}




   //swipe
   

  };
  const navigate = useNavigate();

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
											 console.log('left');
						} else if(startingX-100 > movingX){
                            navigate('/trending');
												}
					 
					 if(startingY+100 < movingY){
					 						console.log('down');
					 } else if(startingY-100 > movingY){
					 						console.log('up');
					 						}
						}  
    return (
        <div style={{backgroundColor:'whitesmoke'}} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} >
            <h1><b>{( param1)}</b> </h1>
            <div style={{height:"600px",overflowY:"scroll",overflowX:'hidden'}} onScroll={onScroll}>
            {
          
             searcharray.length === 0 ? <h1>no result</h1>:
             searcharray.map((v)=>{
                  const {thumbnail} = v.image || {thumbnail:{contentUrl:"https://cima-afrique.org/cima/images/not-available.png"}};
                     const ff = thumbnail.contentUrl ||"https://cima-afrique.org/cima/images/not-available.png";
                 return (
                    
                    <div key={v.id} style={{backgroundColor:'whitesmoke'}} className='outsidecard'>
                     <span className='row'>
                         <span className='col-12 col-sm-6 ' style={{backgroundColor:'whitesmoke'}}>
                             <div className='card' style={{width:"100%",backgroundColor:'white',borderRadius:'25px'}}> 
                            <img src={ff} alt="" style={{width:"90%",marginLeft:'1rem',borderRadius:'25px'}}/>
                             </div>
                         </span>
                         <span className=' col-12 col-sm-6 ' style={{borderRadius:'25px',backgroundColor:'whitesmoke'}}>
                             <div className='card' style={{backgroundColor:"white",width:'100%',borderRadius:'25px',padding:'1rem' }}>
                     <h5><Link className='text-dark'  to={`/${param1}/${v.id}`} >{v.name}</Link></h5>
                     <ul className='nav'>{v.about && v.about.map((e,ind)=>{
                         return  <li  key={ind} style={{padding:'2px'}} className='nav-item'><Link className='nav-link' to={`/${e.name}`} style={{}} className="badge badge-danger">{e.name}</Link></li>
                     })}</ul>
                             </div>
                         </span>
                     </span>
                     
                    </div>
                  
                    
                     
                 )
             })

            }
            </div>
        
        </div>
    )
}
export default  Newssearch