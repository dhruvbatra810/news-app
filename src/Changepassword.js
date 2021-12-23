import React,{useState} from 'react'
import styles from './login_signup.module.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Changepassword = () => {
    const id = useParams().id;
    const url = 'http://localhost:3001/changepass/61c32c5bd3022aafbd426114';
    console.log(url);
   let[name,setname] = useState('');
    let[pass,setpass] = useState('');
    let [em,setem] = useState('');
      const signup = (e)=>{
        
        e.preventDefault();
        console.log(url);
           async function getf(){
            try{
                const res = await axios.post(url,{
                    User_name:name,
                    password:pass,
                    email:em,
                });
                console.log('respone aa gya');
            }
            catch(error){
                console.log(error);
            }
        }
        getf();
    }
    return (
         <div className={styles.bb}>
            <div className={styles.loginBox}> <img className={styles.user} src="https://i.ibb.co/yVGxFPR/2.png" style={{height:'100px',width:'100px'}}/>
    <h3>update your credentials</h3>
    <form >
        <div className={styles.inputBox}>
            <input id="uname" type="text" name="Username" placeholder="Username"  value={name} onChange={e => setname(e.target.value)}/>
         <input id="pass" type="password" name="Password" placeholder="Password" value={pass} onChange={e => setpass(e.target.value) }/>
         <input id="pass" type="email" name="email" placeholder="email" value={em} onChange={e => setem(e.target.value) }/>
        </div>
         <input type="submit" onClick={signup} name="" value="submit"/>
    </form> 
   
</div>
        </div>
    )
}

export default Changepassword
