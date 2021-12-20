import React from 'react'
import {Link} from "react-router-dom"
import './styleforleftside.css'
 const Leftside = () => {
    return (
        
        <div className='container' className='text-dark' style={{backgroundColor:'white',marginTop:'1rem',marginBottom:'1rem',borderRadius:'25px'}}>
             <span className='row'> 
            <Link to="/media" className='text-dark' style={{marginLeft:"2rem"}}>media</Link>

              </span>
              <span className='row'>
            <Link to="/jobs" className='text-dark' style={{marginLeft:"2rem"}}> jobs</Link>

                    </span>
               <span className='row'>  
            <Link to="/healthcare" className='text-dark' style={{marginLeft:"2rem"}}> healthcare</Link>

               </span>
                <span className='row'>
            <Link to="/Technology" className='text-dark' style={{marginLeft:"2rem"}}> Technology</Link>
                    
                </span>
                 <span className='row'> 
            <Link to="/politics" className='text-dark' style={{marginLeft:"2rem"}}> politics</Link>

                  </span>
                  <span className='row'>
            <Link to="/fashion" className='text-dark'style={{marginLeft:"2rem"}}>fashion</Link>

                        </span>
                   <span className='row'> 
            <Link to="/sports" className='text-dark' style={{marginLeft:"2rem"}}> sports</Link>

                    </span>
                    <span className='row'> 
            <Link to="/"  className='text-dark'style={{marginLeft:"2rem"}}> Home</Link>
                     </span>
        </div>
    )
}
export default Leftside

