import React,{useState} from 'react'
import styles from './login_signup.module.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = ({setNamee}) => {
       let[name,setname] = useState('');
    let[pass,setpass] = useState('');
    const navigate = useNavigate();
      const signup = (e)=>{
        e.preventDefault();
        console.log(name, pass);
           async function getf(){
            try{
                const res = await axios.post('http://localhost:3001/signup',{
                    User_name:name,
                    password:pass
                });
                console.log(res);
                console.log('respone aa gya')
              setNamee(name);
                navigate('/');
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
    <h3>Sign in here</h3>
    <form action="login.php" method="post">
        <div className={styles.inputBox}>
            <input id="uname" type="text" name="Username" placeholder="Username"  value={name} onChange={e => setname(e.target.value)}/>
         <input id="pass" type="password" name="Password" placeholder="Password" value={pass} onChange={e => setpass(e.target.value) }/>
        </div>
         <input type="submit" onClick={signup} name="" value="Login"/>
    </form> 
    <div className="text-center">
        <Link to='/login'style={{color:'#59238F'}}>Sign-In</Link>
    </div>
</div>
        </div>
    )
}

export default Signup
