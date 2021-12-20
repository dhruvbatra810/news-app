import React from 'react'
import Leftbotom from './leftbottom';
import Leftupper from './leftupper';
const leftside = ({Name}) => {
    return (
        <div>
            <Leftupper Name={Name}></Leftupper>
            <h3 className='justify-content-center'>Category</h3>
           <Leftbotom></Leftbotom>
        </div>
    )
}

export default leftside
