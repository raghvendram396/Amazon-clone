import React from 'react'
import Header from "./components/Header"
import "./App.css";
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./components/Checkout"
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
<Route path="/checkout">
<Header />
<Checkout />
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
