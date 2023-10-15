import React from 'react'
import { LogoVP_BIG_Black } from "../../assets/index.js"
// import Nav_Account from './Nav_Account.jsx';
// import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux'; 

const NavigationBar = () => {
    const state = useSelector((state) => state.screen);
    return (
        //Make Nav Little Blurry background
        <div className='nav'> 
            <div className="nav__title">
                <div className="nav__title_logo">
                    <img src={LogoVP_BIG_Black} alt="Logo" />
                </div>
                <div className="nav__title_name">Computer Shop</div>
            </div>
            <div>
               
            </div>
            {/* <div className='nav__option'>
                <div className="nav__item">Store</div>
                <div className="nav__item">Refurbish Laptop</div>
                <div className="nav__item">New Laptops</div>
                <div className="nav__item">Accessories</div>
                <div className="nav__item">Camera</div>
                <div className="nav__item">Support & Services</div>
            </div> */}
            {/* <Nav_Account /> */}
        </div>
    )
}

export default NavigationBar