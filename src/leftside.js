import React from 'react'
import {Link} from "react-router-dom"
 const Leftside = () => {
    return (
        <div >
            <Link to="/sports" style={{marginLeft:"2rem"}}> sports</Link>
            <Link to="/fashion" style={{marginLeft:"2rem"}}>fashion</Link>
            <Link to="/politics" style={{marginLeft:"2rem"}}> politics</Link>
            <Link to="/india" style={{marginLeft:"2rem"}}> india</Link>
            <Link to="/Technology" style={{marginLeft:"2rem"}}> Technology</Link>
            <Link to="/healthcare" style={{marginLeft:"2rem"}}> healthcare</Link>
            <Link to="/jobs" style={{marginLeft:"2rem"}}> jobs</Link>
            <Link to="/media" style={{marginLeft:"2rem"}}>media</Link>
        </div>
    )
}
export default Leftside

