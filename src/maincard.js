import React from 'react'
import { ReactPropTypes } from 'react'
import PropTypes from 'prop-types'
import { useParams,Link } from 'react-router-dom';
import Bookmarks from './Bookmarks';

const Maincard = ({datePublished,description,id,image,name,url,provider,about}) => {
     const {thumbnail} = image || {thumbnail:{contentUrl:"https://cima-afrique.org/cima/images/not-available.png"}};
                     const ff = thumbnail.contentUrl ||"https://cima-afrique.org/cima/images/not-available.png";
            const value = useParams().category;
          
    return (
        <>
         <h1><b>{value}</b></h1>
       
        <div className='row' style={{backgroundColor:'whitesmoke',overflow:'scroll',height:'37rem',maxWidth:'50rem'}}>
            <div className='col-12' style={{padding:'2rem'}}>
           
              <div className='card' style={{width:"100%",backgroundColor:'white',borderRadius:'25px',margin:'1rem' ,maxWidth:'50rem',maxHeight:'30rem'}}> 
                            <img src={ff} style={{maxHeight:'200px'}} alt="" />
               
                    <h3 >{name}</h3>
                     <ul className='nav'>{about && value!=='trending' && about.map((e,ind)=>{
                         return  <li  key={ind} style={{padding:'2px'}}className='nav-item'><Link className='nav-link' to={`/${e.name}`}  className="badge badge-danger">{e.name}</Link></li>
                     })}</ul>
                     <span className='row' >
                    <span className='text-muted col'>By &ensp;	<b>{provider[0].name}</b></span>
                    <span className='col-1'><Bookmarks description={description} image ={ff} name ={name} url={url} provider={provider} about={about}></Bookmarks> </span>
                    </span>
                             </div>
                    <h6 style={{margin:'1rem',letterSpacing:'2px'}} className='text-muted'>{description}</h6>
                     <a href={url} style={{margin:'1rem'}} className='text-muted' target="_blank">read more....</a>
                </div>
            </div>
             </>
    )
}
Maincard.propTypes = {
    datePublished: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    provider:PropTypes.array.isRequired,
    image : PropTypes.object.isRequired,
    // thumbnail:  PropTypes.object.isRequired,
    // contentUrl : PropTypes.string.isRequired,
};
Maincard.defaultProps = {
    datePublished: "NA",
    description:"NA",
    name: "NA",
    url: "NA",
    provider:[{name:"string"}],
    image:{thumbnail:{contentUrl:"string"}},


}
export default Maincard
