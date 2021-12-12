import React,{useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom';
import useNewssearchapi from './useNewssearchapi';

const Newssearch = ({wow}) => {
    const {searcharray,setsearcharray} = wow;
    const {param1} = useNewssearchapi(setsearcharray);
    console.log(searcharray)

    return (
        <div>
            <h1>{( param1)} </h1>
            {
          
             searcharray.length === 0 ? <h1>no result</h1>:
             searcharray.map((v)=>{
                 return (
                    
                    <div key={v.id}>
                     <p ><Link to={`/${param1}/${v.id}`}>{v.name}</Link></p>
                     
                    </div>
                  
                    
                     
                 )
             })

            }
        
        </div>
    )
}
export default  Newssearch