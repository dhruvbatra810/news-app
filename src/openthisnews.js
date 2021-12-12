import React from 'react'
import { useParams ,Link} from 'react-router-dom'

import Maincard from './maincard';
const Openthisnews = ({wow}) => {
    const {searcharray,trendingarray} = wow;
    const {category,id} = useParams();
    // console.log(id,category)s
    let myarray = searcharray;
    if(category === "trending")
    myarray = trendingarray
    // console.log(myarray)
    const v = myarray.find((v)=>{
                // console.log(id)
                 return v.id ===parseInt(id);
              }) 
            //   console.log(v)
    return (
        <div>
            <Maincard {...v}> </Maincard>     
        </div>
    )
}

export default Openthisnews
