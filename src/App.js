import React, { useEffect } from 'react'
import Newstreding  from './newstrending';
import Newssearch from './newssearch'
import {BrowserRouter as Router, Link, Navigate, Route,Routes, useNavigate, useParams} from "react-router-dom"
import Leftside  from './leftside';
import Searchit from './searchit';
import Openthisnews from './openthisnews';
import { useState } from 'react/cjs/react.development';
import Maindisplay from './maindisplay';
import Login from './login';
import Forgotpass from './forgotpass';
import Changepassword from './Changepassword';
import Signup from './Signup';
import Maindisplayfornews from './maindisplayfornews';
import axios from 'axios';
import Maindisplayforbookmarksnews from './Maindisplayforbookmarksnews';
export const Context = React.createContext();
 const  App = () => {
  //  const value = Newssearch('footbal','Month',15)
  //  console.log(value)
  const [searcharray,setsearcharray] = useState([]);
  const [trendingarray,settrendingarray]= useState([]);
  const [namee,setNamee] = useState('Not login');
  const [bookmarkarr,setbookmarkarr] = useState([]);
  const [fetchbookmarks,setfetchbookmarks]=useState(0);
  let [v,setv] = useState('');
          const [condition,setcondition] = useState();
        useEffect(()=>{
          if(namee !== 'Not login' ){
             const getme = async ()=>{
               try{
                 console.log(namee);
                   const value = await axios.post('http://localhost:3001/bookmarks',{
                     User_name:namee
                   })
                   setbookmarkarr(value.data);
                   console.log('calling',namee,value);
               }catch(error){
                  console.log(error);
               }
             }
             getme();
          }
          else setbookmarkarr([])
        },[namee,fetchbookmarks])
        console.log(bookmarkarr)
  return (
    <div  style={{backgroundColor:'whitesmoke'}}>
     
    
  
    <Router >
      {/* <div  */}
      <Searchit wow={{setv,v,setNamee,namee}}></Searchit>
      <div className='container-fluid mt-1'>
       <div className='row'>
         <div className='col-2 d-none d-lg-block ' style={{backgroundColor:'whitesmoke'}}>  <Leftside namee={namee}></Leftside></div>
         <div className='col'>  
        
         
      <Routes>
      <Route exact path="/" element={<Navigate to={`/India`}></Navigate>}>  </Route>
      <Route exact path ="/:category" element={<Maindisplay wow={{searcharray,setsearcharray,trendingarray,settrendingarray,namee,v,bookmarkarr}}></Maindisplay> }>   </Route>     
      <Route exact path="/:category/:id" element={ <Context.Provider value={{searcharray,setsearcharray,trendingarray,settrendingarray,setv,v,namee,setfetchbookmarks,bookmarkarr}}><Maindisplayfornews></Maindisplayfornews> </Context.Provider> }></Route>
      <Route path='/trending' element ={<Newstreding wow={{trendingarray,settrendingarray,v}}></Newstreding>}></Route>
      <Route path='/login' element={<Login setNamee={setNamee}></Login>}></Route>
      <Route path='/signup' element={<Signup setNamee={setNamee}></Signup>}></Route>
      <Route path='/forgotpass' element={<Forgotpass></Forgotpass>}></Route>
      <Route path='/forgotpass/:id' element={<Changepassword></Changepassword>}></Route>
      <Route  path ="*" element={<h1>there is no page that you want to access</h1>}> </Route>

      </Routes> 
     
      </div>
    

      </div>
      </div>
      {/* </div> */}
    </Router>
      </div>

  )
}


export default App;