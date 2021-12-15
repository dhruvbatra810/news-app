import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import {Link , Navigate, useNavigate} from "react-router-dom"
import { Redirect } from 'react-router-dom'
import Leftside from './leftside'

const Searchit = ({wow}) => {
    const {setv,v}  = wow;
    const navigate = useNavigate();
    const callme = (e)=>{
        e.preventDefault();
        console.log(v);
        navigate(`/${v}`)
        
    }

    return (
            <>
              {/* <Leftside></Leftside> */}
              {/* <nav className='navbar navbar-expand-lg'> */}
              <div className='row' style={{marginBottom:'2rem',backgroundColor:'white'}} >
                  <span className='col-3'>
                <h1 className='nav'><b>News </b></h1>
                  </span>
                  <span className='col'>
                     <ul className='nav mr-auto '>
                  <li className='nav-item'> <h3 className='nav-link'><Link className='text-dark'  to="/">Home</Link></h3></li>
                  <li className='nav-item'>  <form  onSubmit={callme} className='nav-link'>
            <input type="text" className='form-control' name="category" value={v} onChange={(e)=> setv(e.target.value)}></input>
              <input type='submit' className='form-control' style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',tabindex:'-1'}}></input>
            </form> </li></ul>
                  </span>
              </div>
                 
             {/* </nav> */}
            
        </>
    )
}

export default Searchit
