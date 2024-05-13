import React, { useState, useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { myContext } from '../../App';


const LoginPopup = () => {

  const {setLogin} = useContext(myContext)
const [currentState, setuCrrentState] = useState("Sign in");

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => {setLogin(false)}} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          
          {currentState === "Login" ? <></>: <input type="text" placeholder='Your Name' required/> }
          <input type="text" placeholder='Your Emailid' required/>
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState === 'sign up' ? "Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use and privey policy</p>
        </div>
        {
          currentState === "Login"? 
          <p>Create a new Account? <span onClick={()=> setuCrrentState("Sign up")}>click here</span></p>:
          <p>Already have an account? <span onClick={()=> setuCrrentState("Login")}>Login here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup;
