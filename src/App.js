import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Homepage/Home';

import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import ProductList from './Pages/Productdetails/ProductList';
import Cart from './Pages/cart/Cart';
import Confirmation from './Components/Confirmation';
import Payment from './Pages/Payment/Payment';
import Checkout from './Pages/Checkout/Checkout';
import Product from './Pages/Productdetails/Product';

const StyledButton = styled-Component``

function App() {
  return (
    <div> 
      <Router>
        <Routes>
           <Route path="/"  element={<Home />} /> 
           <Route path="/login"  element={<Login />} />
           <Route path= "/signup"  element= {<Signup />} />
           <Route path= "/product"  element= {<Product/>} />
           <Route path= "/products"  element= {<ProductList />} />
           <Route path= "/cart"  element= {<Cart />} />
           <Route path= "/orderconfirm"  element= {<Confirmation />} />
           <Route path= "/payment"  element= {<Payment />} />
           <Route path= "/checkout"  element= {<Checkout />} />
       </Routes>
      </Router> 
   </div>
  );
}

export default App;
