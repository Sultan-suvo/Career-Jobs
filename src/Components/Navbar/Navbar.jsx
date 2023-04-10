import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='md:flex justify-between items-center my-12 px-12 md:mx-40 text-center'> 
            <h1 className='navbar-title text-center'>VISY<span className='text-orange-400'>MO</span></h1>
            <ul>
                <li className='text-gray-500'>
                    <Link to="/">Home</Link>
                    <Link to="/s">Statistics</Link>
                    <Link href="">Applied Jobs</Link>
                    <Link href="">Blog</Link>
                </li>
            </ul>
            <button className='btn-all px-4 py-2 md:px-7 md:py-5 mt-3'>Star Applying</button>
        </div>
    );
};

export default Navbar;