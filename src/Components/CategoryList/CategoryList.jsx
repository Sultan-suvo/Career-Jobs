import React from 'react';
import './CategoryList.css'

const CategoryList = ({ category }) => {
    const { logo, name, jobs } = category
    return (
        <div>
            <div className="card card-compact w-96 mb-3 border-2">
                <figure><img src={logo} alt="Logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold mt-8">{name}</h2>
                    <p className='text-slate-500 mt-2 mb-8'>{jobs}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;