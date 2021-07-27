import React from 'react'
import "./CheckoutProduct.css"
import {useSelector} from "react-redux";

function CheckoutProduct({id,title,image,price,rating}) {
    const basket=useSelector(state => state.basket);
    var arr=[];
    for(var i=0;i<rating;i++)
    arr.push(i);
    return (
        <div className="checkoutProduct">
            <div className="imageContainer">
             <img src={image} className="productImage"></img>
            </div>
            <div className="contentContainer">
                <span className="title">{title}</span>
            <span ><b className="r">Rs.</b> <span className="title">{price}</span></span>
                <span>{arr.map(i => <span>✨</span>)}</span>
                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
