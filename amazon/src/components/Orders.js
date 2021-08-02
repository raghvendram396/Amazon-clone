import React, { useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase';
import "./Orders.css"
import Order from "./Order"
function Orders() {
    const hidden=useSelector(state => state.successHidden)
    const user=useSelector(state => state.user);
    const [orders,setorders]=useState([]);
    const dispatch=useDispatch();
  useEffect(() => {
   if(!hidden)
   {
       setTimeout(function() {
       dispatch({
           type: "SUCCESS",
           payload: true
       })
       },2000)
   }

   if(user) {
       db.collection("user")
       .doc(user?.uid)
       .collection("orders")
       .onSnapshot(snapshot => (
           setorders(snapshot.docs.map(doc => ({
               id: doc.id,
               data: doc.data()
           })))
       ))
   }
   else setorders([]);
  },[user])
    return (
        
        <div className="orders_returns">
        { !hidden && <h3 style={{color: "green"}}>Orders palced Successfully!</h3> }
          <h2>Your Orders</h2>
          <div className="orders_orders">
              {orders?.map(order => <Order order={order}/>)}
          </div>
        </div>
    )
}

export default Orders
