import React, { useState } from 'react'
import "./Login.css";
import {Link} from "react-router-dom";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";

function Login({hidden}) {
    const [login,setlogin]=useState(false);
    const history=useHistory();
    const [signin,setsignin]=useState({
        email: "",
        password: ""});
        const handleSignin=(e) => {
            setlogin(true);
            e.preventDefault();
            auth
            .signInWithEmailAndPassword(signin.email,signin.password)
            .then((auth) => {
                history.push("/");
            })
            .catch(error => {alert(error.message)
            setlogin(false)})
        }
      
    return (
        <div className="login">
        <img className="image" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img>
        {hidden && <h1 style={{color: "red"}}>Login Required before proceeding to checkout</h1>}
        <div className="form">
        <h3>Sign In</h3>
        <label for="email"><b>Email</b></label>
            <input type="email" name="email" value={signin.email} onChange={(e) => setsignin({...signin, email: e.target.value})}></input>
            <label for="Password"><b>Password</b></label>
            <input type="password" value={signin.password} name="Password" onChange={(e) => setsignin({...signin, password: e.target.value})}></input>
            <button className='button' onClick={handleSignin} disabled={login}>{login ? "Processing":"Sign In"}</button>
            <p>  By signing in, you agree to all terms and conditions of Amazon Clone</p>
            <Link to="/create">
            <button className="create">Create your Amazon Account</button></Link>
        </div>
     
        </div>
    )
}

export default Login
