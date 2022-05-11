import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
import profile from './profile.png';
import bag from './bag.png';
import ArrowBackIosIcon from "@material-ui/icons/Search";
import logo from './logo.png'; // Tell webpack this JS file uses this image
import Search from '@material-ui/icons/Search';

console.log(logo); // /logo.84287d09.png
console.log(profile);
console.log(bag);



const Navbar = () => {
  return (
    <><div className='navbar'>
      <div className='leftSide'>
        <img src={logo} alt="Logo" width="80" height="80" />
        <h2>SHOPDECK</h2>
      </div>
      <div className='rightSide'>
        <img src={profile} alt="profile" width="40" height="40" />
        <img src={bag} alt="bag" width="40" height="40" />

      </div></div>
      <div className="header">
        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/products">Deals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
          <div className='search'>
              <Search/>
              </div>
              <input classname="input" type="text" name="search" placeholder="search"  />
          </div>
      </div>
  </>
 )
 }

 export default Navbar;
