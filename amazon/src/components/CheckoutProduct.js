import React from 'react'
import "./CheckoutProduct.css"
import {useDispatch, useSelector} from "react-redux";

function CheckoutProduct({id,title,image,price,rating,hidden}) {
    const basket=useSelector(state => state.basket);
    const dispatch=useDispatch();
    var arr=[];
    for(var i=0;i<rating;i++)
    arr.push(i);
    const handleRemove=() => {
      dispatch({
          type: "REMOVE_FROM_BASKET",
          payload: id
      })
    }
    return (
        <div className="checkoutProduct">
            <div className="imageContainer">
             <img src={image} className="productImage"></img>
            </div>
            <div className="contentContainer">
                <span className="title">{title}</span>
            <span ><b className="r">Rs.</b> <span className="title">{price}</span></span>
                <span>{arr.map(i => <span>✨</span>)}</span>
                {!hidden && <button onClick={handleRemove}>Remove from basket</button>}
                
            </div>
        </div>
    )
}

export default CheckoutProduct
