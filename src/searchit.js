import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import {Link , useNavigate} from "react-router-dom"
const Searchit = () => {
    const [v,setv] = useState();
    return (
        <div>
             <h1><Link to="/">Home</Link></h1>
            <form  >
            <input type="text" name="category" value={v} onChange={(e)=> setv(e.target.value)}/>
            </form>
            <Link to={`/${v}`}>submit</Link>
        </div>
    )
}

export default Searchit
