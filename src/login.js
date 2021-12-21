import React from 'react'
import styles from './login_signup.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import axios from 'axios'

const Login = () => {
    let[name,setname] = useState('');
    let[pass,setpass] = useState('');
    const login = (e)=>{
        e.preventDefault();
        console.log(name, pass);
        axios({
            method:'post',
            url:'https://localhost:3001/login/',
            data:{
                User_name:name,
                password:pass
            }
        }).then(res => console.log(res)).catch(err => console.log(err));
    }
    return (
        <div className={styles.bb}>
            <div className={styles.loginBox}> <img className={styles.user} src="https://i.ibb.co/yVGxFPR/2.png" style={{height:'100px',width:'100px'}}/>
    <h3>Sign in here</h3>
    <form  >
        <div className={styles.inputBox}> 
        <input id="uname" type="text" name="Username" placeholder="Username"  value={name} onChange={e => setname(e.target.value)}/>
         <input id="pass" type="password" name="Password" placeholder="Password" value={pass} onChange={e => setpass(e.target.value) }/> 
         </div>
          <input type="submit" onClick={login} name="" value="Login"/>
    </form> 
    <a href="#">Forget Password<br/> </a>
    <div className="text-center">
        <Link to='/signup' style={{color:'#59238F'}}>Sign-Up</Link>
    </div>
</div>
        </div>
    )
}

export default Login
