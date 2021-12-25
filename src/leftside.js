import React from 'react'
import Leftbotom from './leftbottom';
import Leftupper from './leftupper';
const leftside = ({namee}) => {
    return (
        <div>
            <Leftupper namee={namee}></Leftupper>
            <h3 className='justify-content-center text-dark' >Category</h3>
           <Leftbotom></Leftbotom>
        </div>
    )
}

export default leftside
