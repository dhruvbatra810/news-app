import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import './styleforrelatednews.css'
import { Link } from 'react-router-dom'
import { Context } from './App'
const Relatednews = () => {
    const {searcharray,trendingarray,bookmarkarr} =  useContext(Context);
     let take = useParams().category;
     let arr = searcharray
     console.log(take)
     if(take === 'trending' || take === 'bookmarks')
    { arr=trendingarray; take = 'trending';}


    return (
        <div>
             <div style={{backgroundColor:'whitesmoke'}}>
            <h1><b>{take}</b> news</h1>
            <div style={{height:"36rem",overflow:"scroll"}}>
            {
             arr.map((v)=>{

                    
                    const {thumbnail} = v.image || {thumbnail:{contentUrl:"https://cima-afrique.org/cima/images/not-available.png"}};
                     const ff = thumbnail.contentUrl ||"https://cima-afrique.org/cima/images/not-available.png";
                    
                 
                 return (
                    <div key={v.id} className='outsidecard'> 
                   <div  className='card' style={{backgroundColor:'white',margin:"3.5vw",borderRadius:'25px'}}>
                     <img src={ff} alt="img not availabe" style={{width:"100%",borderRadius:'25px'}} />
                     <div className='contain'>
                     <h5 style={{marginTop:'1rem'}}><Link className='text-dark'  to={`/${take}/${v.id}`}>{v.name ||"this name is fake"}</Link></h5>
                     <ul className='nav'>{v.about && take !== 'trending' &&v.about.map((e)=>{
                         return  <li  style={{padding:'2px'}}className='nav-item'><Link className='nav-link' to={`/${e.name}`} style={{}} className="badge badge-danger">{e.name}</Link></li>
                     })}</ul>
                     </div>
                    </div>
                    </div>
                 )
             })
            }
            </div>
        </div>
        </div>
    )
}

export default Relatednews
