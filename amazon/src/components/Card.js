import React,{useEffect, useState} from 'react'
import "./Card.css";
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";
function Card() {
    const basket=useSelector(state => state.basket);
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
        settotal(basket?.reduce((amount,item) => item.price+amount,0)); 
        },[basket])
        const [hidden,sethidden]=useState(true);
        const handleClick=() => {
         if(carddetail.card.length!=16 || carddetail.cvv.length!=3) 
         {
         sethidden(false);
        }
        else {
            history.replace("/orders");
        }
        }
    return (
        <div className="card">
                <input type="text" placeholder="Card number" name="card" className="form-control" value={carddetail.card} onChange={handleChange}></input>
            <input placeholder="MM/YY" name="month" className="form-control" value={carddetail.month} onChange={handleChange}></input>
            <input placeholder="CVV" name="cvv"  className="form-control" value={carddetail.cvv} onChange={handleChange}></input>
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
           prefix={"$"}
       />
       
           
            <button onClick={handleClick}>Buy Now</button>
            <h5 style={{color: "red",display: hidden ? "none": "block"}}>Invalid Card details</h5>
        </div>
       
    )
}

export default Card
