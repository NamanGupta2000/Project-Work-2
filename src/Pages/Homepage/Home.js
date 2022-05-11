import React, {useState} from "react";
import './Home.css';
import {BrowserRouter as Router, Routes, useNavigate} from "react-router-dom";

import nikon from './nikon.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

import Slider from "./Imageslider/Slider";
import iqoo from './Imageslider/Assets/iqoo.jpg';
import key from './Imageslider/Assets/key.jpg';
import oppo from './Imageslider/Assets/oppo.jpg';
import samsung from './Imageslider/Assets/samsung.jpg';
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Newsletter from "../../Components/Newsletter";

console.log(nikon);

const Home = () =>{
    const bannerImages = [iqoo, oppo, samsung, key];
   
    return (
        <><><Navbar />
            <div className='home'>
                <div className='home-container'>
                    <Slider images={bannerImages} />
                </div>
                <div className="home-row">
                   <Categories/>
                </div>
                <Products/>
            </div>
            <Newsletter/>
                </><Footer /></>
    );
};

export default Home;
