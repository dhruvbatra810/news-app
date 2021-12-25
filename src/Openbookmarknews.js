import React from 'react'
import { ReactPropTypes } from 'react'
import PropTypes from 'prop-types'
import { useParams,Link } from 'react-router-dom';
import Removebookmarksnews from './Removebookmarksnews';
const Openbookmarknews = ({image,name,url,about,description,provider}) => {
    const value = 'bookmarks'
    return (
             <>
         <h1><b>{value}</b></h1>
       
        <div className='row' style={{backgroundColor:'whitesmoke',overflow:'scroll',height:'37rem'}}>
            <div className='col-12' style={{padding:'2rem'}}>
           
              <div className='card' style={{width:"100%",backgroundColor:'white',borderRadius:'25px',margin:'1rem' ,maxWidth:'50rem',maxHeight:'30rem'}}> 
                            <img src={image} alt="" />
               
                    <h3 >{name}</h3>
                     <ul className='nav'>{about && value!=='trending' && about.map((e)=>{
                         return  <li  style={{padding:'2px'}}className='nav-item'><Link className='nav-link' to={`/${e.name}`}  className="badge badge-danger">{e.name}</Link></li>
                     })}</ul>
                     <span className='row' >
                    <span className='text-muted col'>By &ensp;	<b>{provider[0].name}</b></span>
                    <span className='col-1'><Removebookmarksnews description={description} image ={image} name ={name} url={url} provider={provider} about={about}></Removebookmarksnews> </span>
                    </span>
                             </div>
                    <h6 style={{margin:'1rem',letterSpacing:'2px'}} className='text-muted'>{description}</h6>
                     <a href={url} style={{margin:'1rem'}} className='text-muted' target="_blank">read more....</a>
                </div>
            </div>
             </>
    )
}

export default Openbookmarknews
