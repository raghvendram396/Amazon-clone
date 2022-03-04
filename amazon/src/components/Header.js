import React, { useEffect, useState } from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useDispatch, useSelector} from "react-redux";
import Searched from './Searched';
// import { addtoBasket } from '../action';
import {Link} from "react-router-dom"
import { auth, db } from '../firebase';

function Header() {
    const basket=useSelector(state => state.basket)
    const user=useSelector(state => state.user);
    const [name,setName]=useState("");
    const dispatch=useDispatch();

    // console.log(user);
    // console.log("user")
//    const handleBasketClick=() => {
//    }
const searched_item=useSelector(state=>state.search)
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
   const handleSignout=(e) => {
       e.preventDefault();
       auth.signOut();
   }
   const handleChange=(e)=>{
       console.log("Settign search");
       console.log(searched_item);
       dispatch({type:"SET_SEARCH",payload:e.target.value});
   }
   const click=useSelector(state=>state.search_click);
   const handleClick=()=>{
     dispatch({type:"SET_CLICK",payload: !click});
   }
    return (
        <div className="Header">
        <Link to="/" className="link">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HU4Gu-b_CtjPRqbjIZ6DeFcAoH-EFypP0JzKc6MhZv1p_hJqS3XxEbE1DhMv9MIWcEI&usqp=CAU"></img>
        </Link> 
        
        <input type="text" className="header_search" name="search" value={searched_item} onChange={e => dispatch({type:"SET_SEARCH",payload: e.target.value})}></input>
   
        <Link to={searched_item===""?"/":"/search"} className='link'>
        <SearchIcon className="header_searchIcon" onClick={handleClick} /></Link>
         <div className="right_nav">
         {user ? 
         <Link to="" className='link'>
         <div className="nav_content">
         <span className="auth"><div className="circle">{name[0]}</div></span>
        <span className="Linetwo" onClick={handleSignout}>Sign Out</span>
         </div></Link>:
         <Link to="/login" className='link'>
         <div className='nav_content'>
          <span className="Lineone" >Hello Guest</span>
          <span className="Linetwo">{user ? "Sign out": "Sign in"}</span>
         </div></Link>}
         {/* <Link to={!user && "/login"} className="link">
          
         <div className="nav_content">
         <span className="auth">{name!=="" &&  <div className="circle">{name[0]}</div>}</span>
          <span className="Lineone" >{name==="" && "Hello Guest"}</span>
          <span className="Linetwo" onClick={handleSignout}>{user ? "Sign out": "Sign in"}</span>
         </div>
         </Link> */}
         <Link to="/orders" className="link">
         <div className="nav_content"><span className="Lineone">Returns</span>
             <span className="Linetwo">& Orders</span></div></Link>
             {/* <div className="topclass"> */}
         {/* <div  className="nav_content"><span className="Lineone">Your</span>
             <span className="Linetwo">Prime</span></div> */}
             <Link to="/checkout" className="link">
         <div className="nav_content basket"> <ShoppingBasketIcon className="shopping" /><small>{basket.length}</small></div></Link>
         </div>
        </div>
    )
}

export default Header