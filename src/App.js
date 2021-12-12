import React from 'react'
import Newstredning  from './newstrending';
import Newssearch from './newssearch'
import {BrowserRouter as Router, Link, Route,Routes} from "react-router-dom"
import Leftside  from './leftside';
import Searchit from './searchit';
import Openthisnews from './openthisnews';
import { useState } from 'react/cjs/react.development';
 const  App = () => {
  //  const value = Newssearch('footbal','Month',15)
  //  console.log(value)
  const [searcharray,setsearcharray] = useState([]);
  const [trendingarray,settrendingarray]= useState([1,2,3]);
  // console.log(trendingarray)
  return (
    <>
    <Router>
      <Leftside></Leftside>
      <Searchit></Searchit>
       <Newstredning wow={{trendingarray,settrendingarray}}></Newstredning>
      <Routes>
      <Route exact path="/" element={<Newssearch wow={{searcharray,setsearcharray}}></Newssearch>}>  </Route>
      <Route exact path ="/:category" element={<Newssearch wow={{searcharray,setsearcharray}}></Newssearch> }>   </Route>     
      <Route exact path="/:category/:id" element={ <Openthisnews wow={{searcharray,trendingarray}}></Openthisnews> }></Route>
      <Route  path ="*" element={<h1>there is no page that you want to access</h1>}> </Route>
      </Routes> 
    </Router>
    
    </>
  )
}


export default App;