import React,{useEffect, useState} from 'react'
import Header from "./components/Header"
import "./App.css";
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import {auth} from "./firebase";
import { useDispatch } from 'react-redux';
import Payment from "./components/Payment";
function App() {
  // const [user,setuser]=useState({
  //   user: null
  // })
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User is >>>", authUser);
      if(authUser) {                                                                         //user just logged in/ user was logged in
        dispatch({                       // So now if user is logged in and it refreshes the page then too it will set user to user who was logged in.
          type: "SET_USER",
          payload: authUser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          payload: null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/payment">
      <Header />
      <Payment />
    </Route>
    <Route path="/create">
      <CreateAccount />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
<Route path="/checkout">
<Header />
<Checkout className="checkout" />
</Route>
     <Route path="/">
     <Header />
      <Home />
      </Route>
      </Switch>
    </div>
  
    </Router>
  )
}

export default App
