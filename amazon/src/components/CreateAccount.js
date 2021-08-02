import React, { useState } from 'react';
import "./CreateAccount.css";
import {auth} from "../firebase";
import {useHistory} from "react-router-dom";
import {db} from "../firebase";

function CreateAccount() {
    const [userdetail,setuserdetail]=useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        address: "",
        city: "",
        pincode: ""
    })
    const [signup,setsignup]=useState(false);
    const history=useHistory();
    const handleSubmit=(e) => {
        setsignup(true);
        e.preventDefault();
        auth.createUserWithEmailAndPassword(userdetail.email,userdetail.password)
        .then((auth) => {console.log(auth);
        if(auth)
    {  db.collection("user")
        .doc(auth?.user.uid)
        .collection("detail")
        .add({
            name: userdetail.name,
            mobile: userdetail.mobile,
            address: userdetail.address,
            city: userdetail.city,
            pincode: userdetail.pincode,
            email: userdetail.email
        })
        .then((doc) =>  history.push("/"))
       
    }
    else {alert("error")
         setsignup(false)
           }  // this is similar to redirect in node.js
    })
        .catch(error => {alert(error.message)
         setsignup(false)})

    }
    return (
        <div className="createAc">
           <img className="image" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img>
           <form className="forms" onSubmit={handleSubmit}>
               <input type="text"  name="name" value={userdetail.name} className="form-control" placeholder="Enter Name*" required onChange={(e) => setuserdetail({...userdetail, name: e.target.value})}></input>
               <input type="text" className="form-control" name="mobile" value={userdetail.mobile} placeholder="Mobile*" required onChange={(e) => setuserdetail({...userdetail, mobile: e.target.value})}></input>
               <input type="email" className="form-control"  name="email" value={userdetail.email} placeholder="Email*" required onChange={(e) => setuserdetail({...userdetail, email: e.target.value})}></input>
               <input type="password" className="form-control" name="password" value={userdetail.password} placeholder="Password*" onChange={(e) => setuserdetail({...userdetail, password: e.target.value})}></input>
               <input type="text" className="form-control" name="address" value={userdetail.address} placeholder="Address*" required onChange={(e) => setuserdetail({...userdetail, address: e.target.value})}></input>
               <input type="text" className="form-control" name="city" value={userdetail.city} placeholder="City*" required onChange={(e) => setuserdetail({...userdetail, city: e.target.value})}></input>
               <input type="text" className="form-control" name="pincode" value={userdetail.pincode} placeholder="Pincode*" required onChange={(e) => setuserdetail({...userdetail, pincode: e.target.value})}></input>
              <p> By signing up, you agree to all terms and conditions of Amazon Clone</p>
              <button type="submit" disabled={signup}> {signup ? "Processing":"Signup"}</button>
           </form>
        </div>
    )
}

export default CreateAccount
