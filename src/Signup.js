import React,{useState} from 'react'
import styles from './login_signup.module.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
const Signup = ({setNamee}) => {
       let[name,setname] = useState('');
    let[pass,setpass] = useState('');
    let [em,setem] = useState('');
    const [er,seter] = useState(false);
    const navigate = useNavigate();
      const signup = (e)=>{
        e.preventDefault();
        console.log(name, pass);
           async function getf(){
            try{
                const res = await axios.post('https://backend-for-newsapp.herokuapp.com/signup',{
                    User_name:name,
                    password:pass,
                    email:em
                });
                console.log(res);
              setNamee(name);
               Cookies.set('User_name' , name);
                navigate('/');
            }
            catch(error){
               seter(true);
               console.log(error);
            }
        }
        getf();
    }
    return (
         <div className={styles.bb}>
            <div className={styles.loginBox}> <img className={styles.user} src="https://i.ibb.co/yVGxFPR/2.png" style={{height:'100px',width:'100px'}}/>
    <h3>Sigup in here</h3>
    <form >
        <div className={styles.inputBox}>
            <input id="uname" type="text" name="Username" placeholder="Username"  value={name} onChange={e => {seter(false);setname(e.target.value)}}/>
         <input id="pass" type="password" name="Password" placeholder="Password" value={pass} onChange={e => {seter(false);setpass(e.target.value)} }/>
         <input id="email" type="email" name="email" placeholder="email" value={em} onChange={e => setem(e.target.value) }/>
        </div>
         <input type="submit" onClick={signup} name="" value="signup"/>
    </form> 
    <p style={{color:'red'}} className="text-center"> {er && 'UserName already taken'}</p>
    <div className="text-center">
        <Link to='/login'style={{color:'#59238F'}}>Sign-In</Link>
    </div>
</div>
        </div>
    )
}

export default Signup
