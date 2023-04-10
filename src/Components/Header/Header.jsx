import React from 'react';
import './Header.css'
import headerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Header = () => {
    return (
        <div className='md:flex justify-between pr-20 items-center py-12 px-12 md:px-40 bg-slate-200'>
            <div>
                <h1 className='text-5xl font-bold mb-6'>One Step Closer To Your <span className='text-sky-500'>Dream Job</span></h1>
                <p className='text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-all px-5 py-3 mt-6'>Get Started</button>
            </div>
            <div className='mt-16'>
                <img src={headerImg} alt=""/>
            </div>
        </div>
    );
};

export default Header;