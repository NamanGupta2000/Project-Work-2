import React from 'react'
import './Footer.css';
import logo from './logo.png';

console.log(logo);

const Footer = () => {
  return (
      <><div className='footer'>
        <label className='policy'>POLICY INFO<br></br>
         Privacy Policy<br></br>
         Terms of Sale<br></br>
         Terms of Use<br></br>
         Report Abuse & Takedown<br></br>
         Policy<br></br>
         FAQ</label>
         <label className='company'>
         COMPANY<br></br>
         Impact@SHOPDECK<br></br>
         Careers<br></br>
         Blog<br></br>
         Sitemap</label>
         <label className='popular'>POPULAR LINKS<br></br>
         Lehenga<br></br>
         Headphones<br></br>
         Kid's Clothing<br></br>
         Sarees<br></br>
         Shoes<br></br>
         Winter Wear</label>
         <label className='connect'>CONNECT US<br></br>
         Facebook<br></br>
         Twitter<br></br>
         Linked in<br></br>
         Instagram</label>
         </div>
      </>
  )
}

export default Footer;
