import React, { useState } from 'react';
import "./CreateAccount.css";
import { Link } from 'react-router-dom';
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
    // const handleSubmit=(e) => {
    //     setsignup(true);
    //     e.preventDefault();
    //     auth.createUserWithEmailAndPassword(userdetail.email,userdetail.password)
    //     .then((auth) => {console.log(auth);
    //     if(auth)
    //     { db.collection("user")
    //     .doc(auth?.user.uid)
    //     .collection("detail")
    //     .add({
    //         name: userdetail.name,
    //         mobile: userdetail.mobile,
    //         address: userdetail.address,
    //         city: userdetail.city,
    //         pincode: userdetail.pincode,
    //         email: userdetail.email
    //     })
    //     .then((doc) =>  history.push("/"))
       
    // }
    // else {alert("error")
    //      setsignup(false)
    //        }  // this is similar to redirect in node.js
    // })
    //     .catch(error => {alert(error.message)
    //      setsignup(false)})

    // }

    const handleSubmit=(e) => {
        setsignup(true);
        e.preventDefault();
        auth.createUserWithEmailAndPassword(userdetail.email,userdetail.password)
        .then((userCredential) => {
            db.collection("user").
            doc(userCredential?.user.uid)
            .collection("detail")
            .add({
                name: userdetail.name,
                mobile: userdetail.mobile,
                address: userdetail.address,
                city: userdetail.city,
                pincode: userdetail.pincode,
                email: userdetail.email
            })
            .then((doc) => {
             userCredential.user.sendEmailVerification({url: "https://myownamazon.netlify.app/"});
            auth.signOut(); 
             history.push("/verifyEmail");
            })
            .catch(err=> {alert(err.message)})



            // userCredential.user.sendEmailVerification({url: "http://localhost:3000"});
            // console.log("yha pe",userCredential.user);
            // const uid=userCredential?.user.uid;
            // console.log(uid);
            // auth.signOut();
            // db.collection("user").
            // doc(uid)
            // .collection("detail")
            // .add({
            //     name: userdetail.name,
            //     mobile: userdetail.mobile,
            //     address: userdetail.address,
            //     city: userdetail.city,
            //     pincode: userdetail.pincode,
            //     email: userdetail.email
            // })
            // .then((doc) => {
            //     history.push("/verifyEmail")})  
            // .catch(err=> {alert(err.message)});
        })
        .catch(err=>{alert(err.message)
        setsignup(false);
         })
    }
    return (
        <div className="createAc">
        <Link to="/">
           <img className="image" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"></img></Link>
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
