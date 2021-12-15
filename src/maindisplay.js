import React from 'react'
import Newssearch from './newssearch';
import Newstreding from './newstrending';
const Maindisplay = ({wow}) => {
    const {searcharray,setsearcharray,trendingarray,settrendingarray,v} = wow;
    return (
        <div className='row'>
            <div className='col '>
               <Newssearch wow={{searcharray,setsearcharray}}></Newssearch>
            </div>

         <div className='col-4 d-none d-md-block'>
       <Newstreding wow={{trendingarray,settrendingarray,v}}></Newstreding>
      </div>
        </div>
    )
}

export default Maindisplay
