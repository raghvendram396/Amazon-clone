import React from 'react'
import "./Order.css"
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className="order_return">
        <h2>Order</h2>
        <p>{order.data.date}/{order.data.month+1}/{order.data.year} {order.time}</p>
        <p className="order_id">
            <small>{order.id}</small>
        </p>
       {order.data.basket?.map(item => (
           <div style={{marginBottom: "50px"}}>
           <CheckoutProduct className="products" id={item.id} title={item.title}  price={item.price} image={item.image} rating={item.rating} hidden={true} />
   </div>  ))}
       <CurrencyFormat 
       renderText={(value) => (
    <h3 className="order_total">Order Total: {value}</h3>
       )}
       decimalScale={2}
       value={order.data.amount}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"$"}
   />
    </div>
    )
}

export default Order
