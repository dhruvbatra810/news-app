import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import {Link , Navigate, useNavigate} from "react-router-dom"
import { Redirect } from 'react-router-dom'
import Leftside from './leftside'
const Searchit = () => {
    let [v,setv] = useState('');
    const navigate = useNavigate();
    const callme = (e)=>{
        e.preventDefault();
        console.log(v);
        navigate(`/${v}`)
        
    }

    return (
        <div>
              {/* <Leftside></Leftside> */}
             <h1><Link to="/">Home</Link></h1>
            <form  onSubmit={callme} >
            <input type="text" name="category" value={v} onChange={(e)=> setv(e.target.value)}/>
              <input type='submit'  style={{position:'absolute',left:'-9999px',width:'1px',height:'1px',tabindex:'-1'}}/>
            </form> 
            {/* <Link to={`/${v}`}>submit</Link> */}
        </div>
    )
}

export default Searchit
