import React, {useState} from "react";
import './Checkout.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";


const Checkout = () =>{  
  

  const navigate = useNavigate();

   return (
    <>
    <Navbar/>
     <div className="container1">
        <div className="app-wrapper1">
          <div>
            <h2 classname="title">Checkout Details</h2>
          </div>
          <form classname="form-wrapper1">
            <div classname="name">
              <input classname="input" type="text" name="enteryourname" placeholder="Name" />
            </div>
            <div classname="Mobile">
              <input classname="input" type="int" name="enteryourmobileno" placeholder="Mobile"  />
            </div>
            <div classname="Address">
              <input classname="input" type="address" name="address1" placeholder="Address Line 1" />
            </div>
            <div classname="Address">
              <input classname="input" type="address" name="address1" placeholder="Address Line 2" />
            </div>
            <div classname="Landmark">
              <input classname="input" type="landmark" name="landmark1" placeholder="Landmark" />
            </div>
            <div classname="District">
              <input classname="input" type="district" name="district1" placeholder="District" />
            </div>
            <div classname="State">
              <input classname="input" type="state" name="state1" placeholder="State" />
            </div>
            <div classname="Pin">
              <input classname="input" type="pincode" name="pincode1" placeholder=" Pin Code" />
            </div>
            <div className="Buttons">
              <button onClick={() => navigate('/payment')}>Proceed to Payment</button>
            </div>
          </form>
        </div>
     </div>
     <Footer/>
     </>
   );
};
  
export default Checkout;