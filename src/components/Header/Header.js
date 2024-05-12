import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div>
        <div className='header-upper'>
            <img className='logo' src="/assets/Vector.png" alt='Vector'/>
            <div>
                <h1 className='heading'>LOGO</h1>
            </div>
            <div className='icon-container'>
                <div>
                    <img className='icon' src="/assets/search-normal.png" alt='search'/>
                    <img className='icon' src="/assets/heart.png" alt='heart'/>
                    <img className='icon' src="/assets/shopping-bag.png" alt='shopping-bag' />
                    <img className='icon' src="/assets/profile.png" alt='profile'/>
                </div>
                <div className='options-container'>
                    <select className='options'>
                        <option value="en" selected>ENG</option>
                        <option value="fr">Fre</option>
                        <option value="es">Spa</option>
                        <option value="de">Ger</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='header-list'>
            <h1 className='values'>SHOP</h1>
            <h1>SKILLS</h1>
            <h1>STORIES</h1>
            <h1>ABOUT</h1>
            <h1 className='values2'>CONTACT US</h1>
        </div>
        <hr className='hr1'/>
    </div>
  )
}

export default Header
