import React from 'react'
import Newstredning  from './newstrending';
import Newssearch from './newssearch'
 const  App = () => {
  //  const value = Newssearch('footbal','Month',15)
  //  console.log(value)
  return (
    <div>
      {/* <h1>welcome to react world</h1> */}
      <Newstredning ></Newstredning>
      <Newssearch></Newssearch>
    </div>
  )
}


export default App;