import React,{useContext,useEffect} from 'react'
import { useState } from 'react/cjs/react.development';
import { Context } from './App'
import axios from 'axios'
const Bookmarks = ({description ,  image, name , url, provider, about}) => {
    const {namee,setfetchbookmarks} = useContext(Context);
   
  
    const fun = ()=>{
        setfetchbookmarks(e=>{ return e+1});
       async function getf(){
            try{
                const res = await axios.post('http://localhost:3001/addthis',{
                   namee :namee,
                    image:image,
                    name:name,
                    url:url,
                    provider:provider,
                    about:about,
                    description:description
                });
                console.log('respone aa gya');
            
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
        </>
    )
}

export default Bookmarks
