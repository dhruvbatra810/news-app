import React,{useContext} from 'react'
import Openthisnews from './openthisnews'
import Relatednews from './relatednews'
import { Context } from './App'
import { useParams } from 'react-router-dom'
const Maindisplayfornews = () => {
    const {searcharray,trendingarray,bookmarkarr} = useContext(Context);
    const value = useParams().category;
    console.log(value);
    return (
        <div className='row'>
           <div className='col'><Openthisnews wow={{searcharray,trendingarray,bookmarkarr}}></Openthisnews></div>
            <div className='col-4 d-none d-md-block'><Relatednews></Relatednews> </div>
        </div>
    )
}

export default Maindisplayfornews
