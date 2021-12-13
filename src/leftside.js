import React from 'react'
import {Link} from "react-router-dom"
import './styleforleftside.css'
 const Leftside = () => {
    return (
        
        <div className='container' style={{backgroundColor:'white',marginTop:'1rem',marginBottom:'1rem',borderRadius:'25px'}}>
             <span className='row'> 
            <Link to="/media" style={{marginLeft:"2rem"}}>media</Link>

              </span>
              <span className='row'>
            <Link to="/jobs" style={{marginLeft:"2rem"}}> jobs</Link>

                    </span>
               <span className='row'>  
            <Link to="/healthcare" style={{marginLeft:"2rem"}}> healthcare</Link>

               </span>
                <span className='row'>
            <Link to="/Technology" style={{marginLeft:"2rem"}}> Technology</Link>
                    
                </span>
                 <span className='row'> 
            <Link to="/politics" style={{marginLeft:"2rem"}}> politics</Link>

                  </span>
                  <span className='row'>
            <Link to="/fashion" style={{marginLeft:"2rem"}}>fashion</Link>

                        </span>
                   <span className='row'> 
            <Link to="/sports" style={{marginLeft:"2rem"}}> sports</Link>

                    </span>
                    <span className='row'> 
            <Link to="/" style={{marginLeft:"2rem"}}> Home</Link>
                     </span>
        </div>
    )
}
export default Leftside

