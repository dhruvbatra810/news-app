import React from 'react'
import Newstredning  from './newstrending';
import Newssearch from './newssearch'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Leftside  from './leftside';
 const  App = () => {
  //  const value = Newssearch('footbal','Month',15)
  //  console.log(value)
  return (
    <>
    <Router>
      <Leftside></Leftside>
      <Switch>
      <Route exact path="/"><Newstredning ></Newstredning></Route>
      <Route exact path ="/:category"> <Newstredning ></Newstredning> <Newssearch></Newssearch>  </Route>     
      <Route  path ="*"> <h1>there is no page that you want to access</h1></Route>
      </Switch> 
    </Router>
    
    </>
  )
}


export default App;