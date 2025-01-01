             ----------------------------E-Commerce------------------------------------------------

Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'
import carticon from '../Assests/Assets/cart_icon.png';
import logo from '../Assests/Assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar =() =>
{
    const [menu,setMenu] = useState("shop");
    return(
        <div className="navbar">
       <div className="nav-logo">
        <img src ={logo} alt ="" />
        <p>SHOPPER</p>
       </div>
       <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}} ><Link style ={{textDecoration:'none'}} to ='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Mens")}}><Link style ={{textDecoration:'none'}} to ='/mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link style ={{textDecoration:'none'}} to ='womens'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style ={{textDecoration:'none'}} to ='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
        <Link to ='/login'><button>Login</button></Link> 
        <Link to ='/Cart'><img src = {carticon} alt ="" /></Link>
        <div className='nav-cart-count'>0</div>
       </div>
        </div>
    )
}
export default Navbar

.navbar{
    display:flex;
    justify-content: space-around;
    padding: 16px;
    box-shadow: 0 1px 3px -2px black;
}
.nav-logo{
display: flex;
align-items: center;
gap:10px;
}
.nav-logo p{
    color: #171717;
    font-size: 38px;
    font-weight: 600;
}
.nav-menu
{
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
    color: #626262;
    font-size: 20px;
    font-family: 500;
}
.nav-menu li
{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 3px;
 cursor: pointer;
}

.nav-menu hr{
    border: none;
    width: 80%;
    height: 3px;
    border-radius: 10px;
    background: #FF4141;
}
.nav-login-cart
{
    display:flex;
    align-items: center;
    gap: 45px;
}
.nav-login-cart button{
    width: 157px;
    height: 58px;
    outline: none;
    border: 1px solid #7a7a7a;
    color: #515151;
    font-size: 20px;
    font-weight: 500;
    background: white;
    cursor: pointer;
}
.nav-login-cart button:active{
    background: #f3f3f3;
}

.nav-cart-count
{
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    border-radius: 11px;
    font-size: 14px;
    background: red;
    color: white;
}

Hero.jsx

import React from 'react';
import './Hero.css';
import hand_icon from '../Assests/Assets/hand_icon.png';
import arrow_icon from '../Assests/Assets/arrow.png';
import hero_image from '../Assests/Assets/hero_image.png';

const Hero =() =>
{
    return(
        
        <div className="hero">
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
    
    )
}
export default Hero

.hero{
    height:100vh;
    background:linear-gradient(180deg,#fde1ff,#e1ffea22 60%) ;
    display: flex;

}
.hero-left{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding-left:  180px;
    line-height: 1.1;
}
.hero-left h2{

    color: #090909;
    font-size: 26px;
    font-weight: 600;
}
.hero-left p{
    color: #171717;
    font-size: 70px;
    font-weight: 700;
}
.hero-hand-icon
{
    display: flex;
    align-items: center;
    gap: 20px;
}
.hero-hand-icon img{
   width: 105px; 
}
.hero-latest-btn
{
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 310px;
    height: 70px;
    border-radius: 75px;
    color: white;
    margin-top: 30px;
    background: #ff4141;
    font-size: 22px;
    font-weight: 500;
}

.hero-right{
    flex: 1;
    display: flex;
    align-items:center ;
    justify-content: center;
    
}

Item.jsx
import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;

.item{
    width: 350px;
}
.item p{
    margin : 6px 0px;
}
.item-prices
{
    display: flex;
    gap: 20px;
}
.item-price-new
{
    color: #374151;
    font-size: 18x;
    font-weight: 600;
}
.item-price-old
{
    color: #8c8c8c;
    font-size: 18px;
    font-weight: 500;
    text-decoration: line-through;
}
.item:hover
{
    transform: scale(1.05);
    transition: 0.6s;
}

All Products.js


import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;

Data.js

import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'

let data_product = [
  {
    id:1,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p1_img,
    new_price:50.00,
    old_price:80.50,
  },
  {id:2,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p2_img,
    new_price:85.00,
    old_price:120.50,
  },
  {id:3,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p3_img,
    new_price:60.00,
    old_price:100.50,
  },
  {id:4,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p4_img,
    new_price:100.00,
    old_price:150.00,
  },
];

export default data_product;

import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";
import p4_img from "./product_8.png";
import p5_img from "./product_15.png";
import p6_img from "./product_2.png";
import p7_img from "./product_17.png";
import p8_img from "./product_28.png";

let new_collections = [
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p5_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p7_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p8_img,
    new_price: 100.0,
    old_price: 150.0,
  },
];

export default new_collections;
