import React from 'react'
import styles from './login_signup.module.css'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
         <div className={styles.bb}>
            <div className={styles.loginBox}> <img className={styles.user} src="https://i.ibb.co/yVGxFPR/2.png" style={{height:'100px',width:'100px'}}/>
    <h3>Sign in here</h3>
    <form action="login.php" method="post">
        <div className={styles.inputBox}> <input id="uname" type="text" name="Username" placeholder="Username"/> <input id="pass" type="password" name="Password" placeholder="Password"/> </div> <input type="submit" name="" value="Login"/>
    </form> 
    <div className="text-center">
        <Link to='/login'style={{color:'#59238F'}}>Sign-In</Link>
    </div>
</div>
        </div>
    )
}

export default Signup
