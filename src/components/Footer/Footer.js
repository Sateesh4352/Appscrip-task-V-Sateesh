import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='background'>
      <div className='flex'>
        <div className='subcribe-container'>
            <h1 className='header'>BE THE FIRST PERSON TO KNOW</h1>
            <p className='paragraph'>Sign up for updates from mettā muse.</p>
            <div>
              <input className='input' type="text" placeholder='Enter your e-mail...'></input>
              <button className='button'>Subcribe</button>
            </div>
        </div>
        <div className='contact-container'>
            <h1 className='header'>CONTACT US</h1>
            <p className='para1'>+44 221 133 5360</p>
            <p className='para1'>customercare@mettamuse.com</p>
            <h1 className='header'>Currency</h1>
            <div className='flex-usd'>
                <img className='usa-image' src="assets/United States of America (US).png" alt='US'/>
                <p className='para1'>.USD</p>
            </div>
            <p className='para1'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr></hr>
      <div className='flex'>
        <div>
            <h1 className='header'>mettā muse</h1>
            <p className='para1'>About Us</p>
            <p className='para1'>Stories</p>
            <p className='para1'>Artisans</p>
            <p className='para1'>Boutiques</p>
            <p className='para1'>Contact Us</p>
            <p className='para1'>EU Compliances Docs</p>
        </div>
        <div>
            <h1 className='header'>Quick Links</h1>
            <p className='para1'>Orders & Shipping</p>
            <p className='para1'>Join/Login as a Seller</p>
            <p className='para1'>Payment & Pricing</p>
            <p className='para1'>Return & Refunds</p>
            <p className='para1'>FAQs</p>
            <p className='para1'>Privacy Policy</p>
            <p className='para1'>Terms & Conditions</p>
        </div>
        <div>
            <div>
                <h1 className='header'>FOLLOW US</h1>
                <img src='/assets/Frame 28.png' alt='frame'/>
            </div>
            <div>
                <h1 className='header' id="head">mettā muse Accepts</h1>
                <img src="/assets/Frame 136278.png" alt='frame2'/>
            </div>
        </div>
      </div>
      <div className='para-flex'>
        <p className='para2'>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
