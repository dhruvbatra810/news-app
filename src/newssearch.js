import React,{useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom';
import useNewssearchapi from './useNewssearchapi';
import './stylefornewssearch.css'
const Newssearch = ({wow}) => {
    const {searcharray,setsearcharray} = wow;
    const {param1} = useNewssearchapi(setsearcharray);
    console.log(searcharray)

    return (
        <div style={{backgroundColor:'whitesmoke'}}>
            <h1><b>{( param1)}</b> </h1>
            <div style={{height:"36rem",overflow:"scroll"}}>
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
                     <ul className='nav'>{v.about && v.about.map((e)=>{
                         return  <li  style={{padding:'2px'}}className='nav-item'><Link className='nav-link' to={`/${e.name}`} style={{}} className="badge badge-danger">{e.name}</Link></li>
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