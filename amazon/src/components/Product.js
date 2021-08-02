import React, { useEffect, useState } from 'react'
import "./Product.css"
import {useDispatch,useSelector} from "react-redux";
import {addtoBasket} from "../action";

function Product({id,title,price,rating,image}) {
    let arr=[];
    for(var i=0;i<rating;i++)
    arr.push(i);
    const dispatch=useDispatch();
    const customstle={
        backgroundColor: "gray",
        color: "white"
    }
    const [clicked,setclicked]=useState(false);
    useEffect(() => {
      if(clicked)
      {
          setTimeout(function() {
              setclicked(false)
          },200)
      }
    },[clicked])
 const handleClick=() => {
    setclicked(true)
     const item={
         id: id,
         title: title,
         price: price,
         rating: rating,
         image: image
     }
   dispatch(addtoBasket(item));
 }
    return (
        <div className="Product">
        <div className="each">
            <div className="product_info">
             <span className="title">{title}
             </span>
             <span>Rs. <span style={{fontWeight: 'bolder'}}>{price} </span></span>
             <span>
                {arr.map(i => <span>✨</span>)}
             </span>
            </div>     
          {/* <div className="product_image"> */}
              <img className="IMAGE" src={image}></img>
          {/* </div> */}
          <div className="botton">
          <button onClick={handleClick} style={clicked ? customstle: {}}>Add to Basket</button>
          </div>
          </div>
        </div>
    )
}

export default Product
