import React, { useEffect, useState } from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useSelector} from "react-redux";
// import { addtoBasket } from '../action';
import {Link} from "react-router-dom"
import { auth, db } from '../firebase';

function Header() {
    const basket=useSelector(state => state.basket)
    const user=useSelector(state => state.user);
    const [name,setName]=useState("");
    
    console.log(user);
    console.log("user")
   const handleBasketClick=() => {
   }

   useEffect(() => {
     if(user) {  
       db.collection("user").
       doc(user.uid)
       .collection("detail").
       onSnapshot(snapshot => (
       snapshot.docs.map(doc => (setName(doc.data().name)))
       ))    
    }
    else setName("");
   },[user])
   const handleSignout =(e) => {
       e.preventDefault();
       auth.signOut();
   }
    return (
        <div className="Header">
        <Link to="/">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HU4Gu-b_CtjPRqbjIZ6DeFcAoH-EFypP0JzKc6MhZv1p_hJqS3XxEbE1DhMv9MIWcEI&usqp=CAU"></img>
        </Link> <input type="text" className="header_search"></input>
         <SearchIcon className="header_searchIcon" />
         <div className="right_nav">
         <Link to={!user && "/login"} className="link">
         <div className="nav_content">
         <span className="auth">{name!=="" &&  <div className="circle">{name[0]}</div>}</span>
             <span className="Lineone" >{name==="" && "Hello Guest"}</span>
             <span className="Linetwo" onClick={handleSignout}>{user ? "Sign out": "Sign in"}</span>
         </div>
         </Link>
         <div className="nav_content"><span className="Lineone">Returns</span>
             <span className="Linetwo">& Orders</span></div>
         <div  className="nav_content"><span className="Lineone">Your</span>
             <span className="Linetwo">Prime</span></div>
             <Link to="/checkout">
         <div className="nav_content basket"> <ShoppingBasketIcon className="" /><small>{basket.length}</small></div></Link>
         </div>
        </div>
    )
}

export default Header
