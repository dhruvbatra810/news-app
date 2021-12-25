import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import Openbookmarknews from './Openbookmarknews';
import Maincard from './maincard';
const Openthisnews = ({wow}) => {
    const {searcharray,trendingarray,bookmarkarr} = wow;
    const {category,id} = useParams();
    // console.log(id,category)s
    let myarray = searcharray;
    if(category === "trending")
    myarray = trendingarray;
    if(category === 'bookmarks')
    myarray = bookmarkarr;
    console.log(myarray)

    const v = myarray.find((v,ind)=>{
                
                 return ind ===parseInt(id);
              }) 
            //   console.log(v)
    return (
        <div>
            {category !== 'bookmarks' && <Maincard {...v}> </Maincard>}
            {category === 'bookmarks' && <Openbookmarknews {...v}></Openbookmarknews>}
        </div>
    )
}

export default Openthisnews
