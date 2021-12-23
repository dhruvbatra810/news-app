import React from 'react'
import styles from './login_signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'

const Forgotpass = () => {
    let[name,setname] = useState('');
    let[pass,setpass] = useState('');
      const signup = (e)=>{
        e.preventDefault();
        console.log(name, pass);
           async function getf(){
            try{
                const res = await axios.post('http://localhost:3001/forgotpass',{
                    User_name:name,
                });
                console.log(res);
                console.log('respone aa gya')
            }
            catch(error){
                console.log("error aa rha hai fir se kya");
            }
        }
        getf();
    }
    return (
         <div className={styles.bb}>
            <div className={styles.loginBox}> <img className={styles.user} src="https://i.ibb.co/yVGxFPR/2.png" style={{height:'100px',width:'100px'}}/>
    <form >
        <div className={styles.inputBox}>
            <input id="uname" type="text" name="Username" placeholder="Username"  value={name} onChange={e => setname(e.target.value)}/>
        </div>
         <input type="submit" onClick={signup} name="" value="submit"/>
    </form> 
    <div className="text-center">
        <Link to='/login'style={{color:'#59238F'}}>signin</Link>
    </div>
</div>
        </div>
    )
}

export default Forgotpass
