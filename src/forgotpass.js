import React from 'react'
import styles from './login_signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'

const Forgotpass = () => {
    let[name,setname] = useState('');
    const [er,seter] = useState('');
      const signup = (e)=>{
        e.preventDefault();
        seter('check you mail'); 
           async function getf(){
            try{
                const res = await axios.post('http://localhost:3001/forgotpass',{
                    User_name:name,
                });
               
                
            }
            catch(error){
              seter('Invalid UserName');
               console.log(error);
            }
        }
        getf();
    }
    return (
         <div className={styles.bb}>
            <div className={styles.loginBox}> <img className={styles.user} src="https://i.ibb.co/yVGxFPR/2.png" style={{height:'100px',width:'100px'}}/>
    <form >
        <div className={styles.inputBox}>
            <input id="uname" type="text" name="Username" placeholder="Username"  value={name} onChange={e => {seter('');setname(e.target.value)}}/>
        </div>
         <input type="submit" onClick={signup} name="" value="submit"/>
    </form> 
    <p style={{color:'red'}} className="text-center"> {er}</p>
    <div className="text-center">
        <Link to='/login'style={{color:'#59238F'}}>signin</Link>
    </div>
</div>
        </div>
    )
}

export default Forgotpass
