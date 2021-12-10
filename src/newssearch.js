import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import useNewssearchapi from './useNewssearchapi';
const Newssearch = () => {

    const {param1,getquery} = useNewssearchapi();

    return (
        <div>
            <h1>{param1} </h1>
            {
             getquery.map((v)=>{
                 return (
                     <p>{v.name}</p>
                 )
             })

            }
        
        </div>
    )
}
export default  Newssearch