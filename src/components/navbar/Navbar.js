import React, { useState, useContext } from 'react';
import './Navbar.css'; 
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import LoginPopup from '../login-popup/LoginPopup';
import { myContext } from '../../App';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const { login, setLogin, cardItems } = useContext(myContext);

    // Calculate total count of items in the cart
    const totalCount = cardItems.reduce((total, item) => total + item.count, 0);

    return (
        <>
            {login ? <LoginPopup /> : <></>}
            <div className='navbar'>
                <Link to='/'>
                    {/* <h1 className='logo'/>< /h1> */}
                    <img src={assets.logo} alt="" className='logo'/>
                </Link>
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                    <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                    <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    {/* <i className="material-icons">search</i> */}
                    <Link to='/cart' className="cart-icon">
                        <img src={assets.bag_icon} alt="" />
                        {totalCount > 0 && <span style={{color:'red', fontWeight:'700'}}>{totalCount}</span>}
                    </Link>
                    <button onClick={() => { setLogin(true) }}>Sign Up</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
