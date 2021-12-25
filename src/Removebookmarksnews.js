import React,{useContext,useEffect} from 'react'
import { useState } from 'react/cjs/react.development';
import { Context } from './App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Removebookmarksnews = ({description ,  image, name , url, provider, about}) => {
     const {namee,setfetchbookmarks} = useContext(Context);
   
    const navigate = useNavigate();
    const fun = ()=>{
        setfetchbookmarks(e=>{ return e+1});
       async function getf(){
            try{
                const res = await axios.post('http://localhost:3001/removethis',{
                   namee :namee,
                    image:image,
                    name:name,
                    url:url,
                    provider:provider,
                    about:about,
                    description:description
                });
                console.log(res);
                navigate('/bookmarks');
            
            }
            catch(error){
                console.log(error);
            }
        }
        getf();  
    }
    return (
        <>
        {namee!== 'Not login' &&  <i className="fas fa-bookmark" title='remove this ' onClick={ fun}></i>}
        </>
    )
}

export default Removebookmarksnews
