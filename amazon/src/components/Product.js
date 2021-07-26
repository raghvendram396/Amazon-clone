import React from 'react'
import "./Product.css"

function Product({id,title,price,rating,image}) {
    let arr=[];
    for(var i=0;i<rating;i++)
    arr.push(i);

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
          <div className="product_image">
              <img className="image" src={image}></img>
          </div>
          <div className="botton">
          <button>Add to Bakset</button>
          </div>
          </div>
        </div>
    )
}

export default Product
