import React from 'react'
import Newstredning  from './newstrending';
import Newssearch from './newssearch'
import {BrowserRouter as Router, Link, Route,Routes} from "react-router-dom"
import Leftside  from './leftside';
import Searchit from './searchit';
 const  App = () => {
  //  const value = Newssearch('footbal','Month',15)
  //  console.log(value)
  return (
    <>
    <Router>
      <Leftside></Leftside>
      <Searchit></Searchit>
       <Newstredning ></Newstredning>
      <Routes>
      <Route exact path="/" element={<Newssearch></Newssearch>}>  </Route>
      <Route exact path ="/:category" element={<Newssearch></Newssearch>}>    </Route>     
      <Route exact path="/:category/:id" element={ <h1><Link to="/">Home</Link></h1>}></Route>
      <Route  path ="*" element={<h1>there is no page that you want to access</h1>}> </Route>
      </Routes> 
    </Router>
    
    </>
  )
}


export default App;