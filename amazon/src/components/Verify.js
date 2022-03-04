import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Verify.css"

function Verify() {
  const history=useHistory();



  const handleClick=() => {
    history.push("/login");
  }
  return (
    <div className="Home">
    <h3 style={{margin:"auto", marginTop: "20px",marginBottom:"10px"}}>Email has been sent to the provided email address.</h3>
    <h5 style={{margin:"auto",marginTop:"20px",marginBottom:"10px"}}>Click on the link sent in the mail to verify your email address and then sign in</h5>
    <button onClick={handleClick} style={{margin: "auto",marginTop:"10px",marginBottom:"40px"}} className="button">Sign In</button>
    </div>
  )
}

export default Verify;