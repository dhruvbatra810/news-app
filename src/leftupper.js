import React from 'react'
import style from './leftupper.module.css'
const Leftupper = ({Name}) => {
    return (
        <div className = {style.card}>
           <p className={style.cardinner}><b>{Name === 'Not login' ? 'Not login':`welcome ${Name}`}</b></p> 
        </div>
    )
}

export default Leftupper
