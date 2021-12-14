import React,{useContext} from 'react'
import Openthisnews from './openthisnews'
import Relatednews from './relatednews'
import { Context } from './App'
const Maindisplayfornews = () => {
    const {searcharray,trendingarray} = useContext(Context);
    return (
        <div className='row'>
            <div className='col'><Openthisnews wow={{searcharray,trendingarray}}></Openthisnews></div>
            <div className='col-4 d-none d-md-block'><Relatednews></Relatednews> </div>
        </div>
    )
}

export default Maindisplayfornews
