import React from 'react'
import Newssearch from './newssearch';
import Newstreding from './newstrending';
import Maindisplayforbookmarksnews from './Maindisplayforbookmarksnews';
import { useParams } from 'react-router-dom';
const Maindisplay = ({wow}) => {
    const {searcharray,setsearcharray,trendingarray,settrendingarray,v,bookmarkarr,setv} = wow;
     const value= useParams().category;
     console.log(value);
    return (
        <div className='row'>
            <div className='col col-md '>
              {value !== 'bookmarks' && <Newssearch wow={{searcharray,setsearcharray}}></Newssearch>}
               {value === 'bookmarks' &&  <div className='col'> <Maindisplayforbookmarksnews  wow={{bookmarkarr,setv}}></Maindisplayforbookmarksnews></div>}
            </div>

         <div className='col-4 d-none d-md-block'>
       <Newstreding wow={{trendingarray,settrendingarray,v}}></Newstreding>
      </div>
        </div>
    )
}

export default Maindisplay
