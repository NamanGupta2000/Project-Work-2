import React from 'react'
import styled from "styled-components";

import './Payment.css'
import Navbar from '../../Components/Navbar/Navbar';
import shoe from './Nike shoe.png';
import { useNavigate } from "react-router-dom";

console.log(shoe);

const Image = styled.img`
  width: 300px;
`;

function Payment() {

const navigate = useNavigate();

  return (
      <>
      <Navbar/>
      <div className='app-Wrapper'>
      <div className='Leftside'>
          <h2 className='Options'>Payment options</h2>
          
            <div className='Buttons'>
          <button onClick={() => navigate('/orderconfirm')}>UPI</button></div>
           <div className='Buttons'>
          <button >Wallets</button></div>
           <div className='Buttons'>
          <button >Credit/Debit</button></div>
            <div className='Buttons'>
          <button >Cash on delivery</button></div>
          <div className='Buttons'>
          <button >Net Banking</button></div>
          </div>
          <div className='Rightside'>
              <h3>Product Details</h3>
              <div className='Details'>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              <label className='Description'>
              Nike Air Force 1 '07<br></br>
              Premium Men's Shoes<br></br><br></br>
              ₹11,495<br></br>
              incl. of taxes and<br></br> 
              duties<br></br>
              </label>
              </div>
              <div className='Total'>
                  <label className='Charges'>
                      Delivery Charges:<br></br>
                      Total Payable:
                  </label>
                  <label className='Amount'>₹0.00<br></br>
                  ₹11,495.00</label>
              </div>
          </div>
              </div>
      </>
  )
}

export default Payment;