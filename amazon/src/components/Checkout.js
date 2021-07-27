import React,{useEffect, useState} from 'react'
import "./Checkout.css"
import CurrencyFormat from "react-currency-format"
import {useSelector,useDispatch} from "react-redux";
import Product from "./Product"
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const basket=useSelector(state=> state.basket);
    const [total,settotal]=useState(0);
    useEffect(() => {
    settotal(basket?.reduce((amount,item) => item.price+amount,0)); 
    },[basket])
    return (
        <div className="checkout">
           <div className="left">
           <img className="ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/card-info_desktop_wf-unrecnp.jpg"></img>
            <h4>Hello guest</h4>
            <div >
                <h3>Your Shopping Basket</h3>
                <div className="checkoutItems">
                 {basket.map((item,i) => <CheckoutProduct id={i} price={item.price} title={item.title} image={item.image} rating={item.rating} />)}
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
     <button>Proceed to checkout</button>
           </div>
        </div>
    )
}

export default Checkout
