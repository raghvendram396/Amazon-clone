import React,{useEffect, useState} from 'react'
import "./Card.css";
import CurrencyFormat from 'react-currency-format';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";
import { db } from '../firebase';
function Card() {
    const [processing,setprocessing]=useState(false);
    const basket=useSelector(state => state.basket);
    const user=useSelector(state => state.user);
    const dispatch=useDispatch();
    const [carddetail,setcarddetail]=useState({
        card: "",
        month: "",
        cvv: ""
    })
    const [total,settotal]=useState(0);
    const history=useHistory();
    const handleChange =(e) => {
        const name=e.target.name;
        setcarddetail({
            ...carddetail,
            [name]: e.target.value
        })
        sethidden(true);
    }
    useEffect(() => {
        //   if(!user)
        //   {
        //   alert("Please Login into your account first");
        //   history.push("/login");
        //   }
        settotal(basket?.reduce((amount,item) => item.price+amount,0)); 
        },[basket,user])
        const [hidden,sethidden]=useState(true);


        const handleClick=() => {
         if(carddetail.card.length!=16 || carddetail.cvv.length!=3) 
         {
         sethidden(false);
        }
        else {
            setprocessing(true);
            db.collection("user")
            .doc(user?.uid)
            .collection("orders")
            .add({
                basket: basket,
                amount: total,
                date: new Date().getDate(),
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
                time: new Date().toLocaleTimeString(),
                datestring: toString(new Date().getFullYear)+"/"+toString(new Date().getMonth())+"/"+toString(new Date().getDate())+"/"+toString(new Date().toLocaleTimeString())
            })
            .then((doc) =>  {
                dispatch({
                    type: "SUCCESS",
                    payload: false
                })
                dispatch({
                    type: "CLEAR",
                })
            history.replace("/orders")})
            .catch(err => {
                alert(err);
                setprocessing(false)
            })
        }
        }
    return (
        <div className="card">
            <input type="text" placeholder="Card number" type="number" name="card" className="form-control" value={carddetail.card} onChange={handleChange}></input>
            <input placeholder="MM/YY" name="month" type="number" className="form-control" value={carddetail.month} onChange={handleChange}></input>
            <input placeholder="CVV" name="cvv" type="number" className="form-control" value={carddetail.cvv} onChange={handleChange}></input>
            <CurrencyFormat 
           renderText={(value) => (
            <>
               <h4>Order Total: {value}</h4>
               </>
            
           )}
           decimalScale={2}
           value={total}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"Rs. "}
       />
       
           
            <button onClick={handleClick} disabled={processing}>{processing ? "Processing" : "Buy Now"}</button>
            <h5 style={{color: "red",display: hidden ? "none": "block"}}>Invalid Card details</h5>
        </div>
       
    )
}

export default Card