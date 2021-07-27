import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useSelector} from "react-redux";
// import { addtoBasket } from '../action';
import {Link} from "react-router-dom"

function Header() {
    const basket=useSelector(state => state.basket)
   const handleBasketClick=() => {

   }
    return (
        <div className="Header">
        <Link to="/">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HU4Gu-b_CtjPRqbjIZ6DeFcAoH-EFypP0JzKc6MhZv1p_hJqS3XxEbE1DhMv9MIWcEI&usqp=CAU"></img>
        </Link> <input type="text" className="header_search"></input>
         <SearchIcon className="header_searchIcon" />
         <div className="right_nav">
         <div className="nav_content">
             <span className="Lineone" >Hello Guest</span>
             <span className="Linetwo">Sign in</span>
         </div>
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
