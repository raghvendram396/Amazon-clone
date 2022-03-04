import React, { useEffect, useState } from 'react'
import { addtoBasket } from '../action'
import "./Payment.css";
import {useSelector} from "react-redux";
import CheckoutProduct from './CheckoutProduct';
import {db} from "../firebase";
import Card from "./Card";
import { useHistory } from 'react-router-dom';
// import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const history=useHistory();
    const basket=useSelector(state => state.basket);
    const user=useSelector(state => state.user);
    const [delievery,setdelievery]=useState({
        address: "",
        city: "",
        pincode: ""
    })
    useEffect(() => {
    if(!user){
        history.replace("/login")
    }
    if(basket.length===0)
    {
        alert("Add some items to basket before proceeding to checkout")
        history.replace("/")
    }
    if(user) {
        db.collection("user").
        doc(user.uid)
        .collection("detail").
        onSnapshot(snapshot => (
        snapshot.docs.map(doc => (setdelievery({
            address: doc.data().address,
            city: doc.data().city,
            pincode: doc.data().pincode
        })))
        ))    
    }
    else {
        setdelievery({
            address: "",
            city: "",
            pincode: ""
        })
    }
    },[user])
    return (
        <div className="payment">
            <div className="checkouthead"><h2>CheckOut ({basket.length} items)</h2></div>
            <div className="details">
                <div className="delieveryheading"><h5>Delievery Address</h5></div>
                <div className="address"><p>{delievery.address} {delievery.city} {delievery.pincode}</p></div>
            </div>
            <div className="details smalldetails">
                <div className="delieveryheading"><h5>Review and Delievery items</h5></div>
                <div className="paymentitems">{basket.map(item => <CheckoutProduct title={item.title} id={item.id} price={item.price} rating={item.rating} image={item.image} hidden={true} />)}</div>
            </div>
            <div className="details smalldetailscard">
                <div className="delieveryheading">
                    <h5>Payment Method</h5>
                    <p>Enter Card details</p>
                </div>
                <div className="paymentcard">
                <Card />
                </div>
            </div>
        </div>
    )
}

export default Payment