import React,{useEffect, useState} from 'react'
import "./Checkout.css"
import CurrencyFormat from "react-currency-format"
import {useSelector,useDispatch} from "react-redux";
import {db} from "../firebase";

import CheckoutProduct from './CheckoutProduct';
import {Link} from "react-router-dom";
function Checkout() {
    const [name,setName]=useState("");
    const basket=useSelector(state=> state.basket);
    const user=useSelector(state=> state.user);
    const [total,settotal]=useState(0);
    useEffect(() => {
    settotal(basket?.reduce((amount,item) => item.price+amount,0)); 
     if(user) {
        db.collection("user").
        doc(user.uid)
        .collection("detail").
        onSnapshot(snapshot => (
        snapshot.docs.map(doc => (setName(doc.data().name)))
        ))  
     }
    },[basket,user])
  const handleProceed=() => {
      if(!user)
      alert("Login into your account before proceeding to Checkout");
  }
    return (
        <div className="checkout">
           <div className="left">
           <img className="ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/card-info_desktop_wf-unrecnp.jpg"></img>
            <h4>Hello {name==="" ? "Guest" : name}</h4>
            <div >
                <h3>Your Shopping Basket</h3>
                <div className="checkoutItems">
                 {basket.map((item) => <CheckoutProduct id={item.id} price={item.price} title={item.title} image={item.image} rating={item.rating} />)}
                </div>
            </div>
           </div>
           <div className="right">
       <CurrencyFormat
         renderText={(value) => (
            <>
               <p>SubTotal ({basket.length} items): <strong>{value}</strong>
               </p>
               <small className="subTotal_gift">
                <input type="checkbox" />   This order contains a gift;
               </small>
               </>
            
           )}
           decimalScale={2}
           value={total}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"Rs. "}
/>
   <Link to={user ? "/payment":"/login"} className="link">
     <button onClick={handleProceed}>Proceed to checkout</button>
     </Link>
           </div>
        </div>
    )
}

export default Checkout
