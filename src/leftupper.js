import React from 'react'
import style from './leftupper.module.css'
const Leftupper = ({namee}) => {
    return (
        <div className = {style.card} >
           <p className={style.cardinner} className='text-dark'><b>{namee === 'Not login' ? 'Not login':`welcome ${namee}`}</b></p> 
        </div>
    )
}

export default Leftupper
