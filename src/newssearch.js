import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import useNewssearchapi from './useNewssearchapi';
import searcharray from './searcharray';
const Newssearch = () => {

    const {param1} = useNewssearchapi();
    console.log(searcharray)

    return (
        <div>
            <h1>{( param1)} </h1>
            {
          
             searcharray.length === 0 ? <h1>no result</h1>:
             searcharray.map((v)=>{
                 return (
                     <p key={v.id}>{v.name}</p>
                 )
             })

            }
        
        </div>
    )
}
export default  Newssearch