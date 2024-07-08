import React from 'react'
import logo from "../images/logo.svg"
import cart from "../images/icon-cart.svg"
import profileImg from "../images/image-avatar.png"
import './header.css';

function header() {
 
    return (
      <div>
          <div className='nav-container'>
            <div className='nav'>
                <img src={logo}/>
                <div className='nav-links'>
                    <a href='/'>Collections</a>
                    <a href='/'>Men</a>
                    <a href='/'>Women</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                </div>
            </div>
            <div className='cart-container'>
                <img src={cart} className='cart'/>
                <img src={profileImg} className='profile-img'/>
            </div>
          
          </div>
          <div className='line'></div>
      </div>
    )
  }


export default header