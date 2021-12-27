import React,{useContext,useEffect} from 'react'
import { useState } from 'react/cjs/react.development';
import { Context } from './App'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Bookmarks = ({description ,  image, name , url, provider, about}) => {
    const {namee,setfetchbookmarks} = useContext(Context);
   
  
    const fun = ()=>{
        
       async function getf(){
            try{
                const res = await axios.post('https://backend-for-newsapp.herokuapp.com/addthis',{
                   namee :namee,
                    image:image,
                    name:name,
                    url:url,
                    provider:provider,
                    about:about,
                    description:description
                });
                console.log('respone aa gya');
                setfetchbookmarks(e=>{ return e+1});
            
            }
            catch(error){
                alert('it has already been saved');
            }
        }
        getf();  
    }
    return (
        <>
        {namee!== 'Not login' &&  <i className="fas fa-save" title='save this for later' onClick={ fun}></i>}
        {namee === 'Not login' && <Link to='/login'><i className="fas fa-sign-in-alt" title="login to save this"></i></Link>}
        </>
    )
}

export default Bookmarks
