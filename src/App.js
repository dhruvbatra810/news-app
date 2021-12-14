import React from 'react'
import Newstredning  from './newstrending';
import Newssearch from './newssearch'
import {BrowserRouter as Router, Link, Navigate, Route,Routes, useParams} from "react-router-dom"
import Leftside  from './leftside';
import Searchit from './searchit';
import Openthisnews from './openthisnews';
import { useState } from 'react/cjs/react.development';
import Maindisplay from './maindisplay';
import Maindisplayfornews from './maindisplayfornews';
export const Context = React.createContext();
 const  App = () => {
  //  const value = Newssearch('footbal','Month',15)
  //  console.log(value)
  const [searcharray,setsearcharray] = useState([]);
  const [trendingarray,settrendingarray]= useState([1,2,3]);
  // console.log(trendingarray)
  return (
    <div style={{backgroundColor:'whitesmoke'}}>
    
    <Router >
      <Searchit></Searchit>
      <div className='container-fluid mt-1'>
       <div className='row'>
         <div className='col-2 d-none d-lg-block ' style={{backgroundColor:'whitesmoke'}}> <h3 className='justify-content-center'>Category</h3> <Leftside></Leftside></div>
         <div className='col'>  
        
         {/* <div style={{height:"40rem",overflow:"scroll"}}>       */}
      <Routes>
      <Route exact path="/" element={<Navigate to={`/India`}></Navigate>}>  </Route>
      <Route exact path ="/:category" element={<Maindisplay wow={{searcharray,setsearcharray,trendingarray,settrendingarray}}></Maindisplay> }>   </Route>     
      <Route exact path="/:category/:id" element={ <Context.Provider value={{searcharray,setsearcharray,trendingarray,settrendingarray}}><Maindisplayfornews></Maindisplayfornews> </Context.Provider> }></Route>
      <Route  path ="*" element={<h1>there is no page that you want to access</h1>}> </Route>
      </Routes> 
      {/* </div> */}
      </div>
    

      </div>
      </div>
      
    </Router>
    
    </div>
  )
}


export default App;