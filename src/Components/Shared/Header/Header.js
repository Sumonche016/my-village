import React from 'react';
import logo from '../../../image/logo.png'
import './Header.css'

const Header = () => {
    const menu = <>
        <li>Home</li>
        <li>Service</li>
        <li>Contact</li>
        <li>About</li>
        <li>Log In</li>
    </>
    return (
        <header className='py-4 fixed top-0 w-full bg-[#f8f9fa]' id='navbar'>
            <div className='w-11/12 mx-auto flex justify-between items-center '>
                <div className="nav-start">
                    <img className='w-[200px]' src={logo} alt="" />
                </div>
                <div className="nav-middle">
                    <ul className='flex gap-4 text-[#494343] text-[18px]'>
                        {menu}
                    </ul>
                </div>
                <div className="nav-end">
                    <button className='btn'>Sign Up</button>
                </div>
            </div>
        </header>

    );
};

export default Header;


