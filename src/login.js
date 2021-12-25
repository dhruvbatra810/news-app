import React from 'react'
import styles from './login_signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'

const Login = ({setNamee}) => {
    let[name,setname] = useState('');
    let[pass,setpass] = useState('');
    const[er , seter] = useState(false);
    const navigate = useNavigate();
      const login = (e)=>{
        e.preventDefault();
        console.log(name, pass);
           async function getf(){
            try{
                const res = await axios.post('http://localhost:3001/login',{
                    User_name:name,
                    password:pass
                });
            
                console.log('respone aa gya')
              setNamee(name);
                navigate('/');
            }
            catch(error){
                console.log("error aa rha hai fir se kya");
                seter(true);
            }
        }
        getf();
    }
  
    return (
        <div className={styles.bb}>
            <div className={styles.loginBox}> <img className={styles.user} src="https://i.ibb.co/yVGxFPR/2.png" style={{height:'100px',width:'100px'}}/>
    <h3>Sign in here</h3>
    <form  >
        <div className={styles.inputBox}> 
        <input id="uname" type="text" name="Username" placeholder="Username"  value={name} onChange={e => {seter(false);setname(e.target.value)}}/>
         <input id="pass" type="password" name="Password" placeholder="Password" value={pass} onChange={e => {seter(false);setpass(e.target.value)} }/> 
         </div>
          <input type="submit" onClick={login} name="" value="Login"/>
    </form> 
    <p style={{color:'red'}} className="text-center"> {er && 'Invalid UserName or password'}</p>
    <Link to='/forgotpass' >forget password</Link>
    <div className="text-center">
        <Link to='/signup' style={{color:'#59238F'}}>Sign-Up</Link>
    </div>
</div>
        </div>
    )
}

export default Login
