import React, { useState } from 'react';
import locationIcon from '../../assets/Icons/Frame-4.png'
import salaryIcon from '../../assets/Icons/Frame.png'

const Feature = ({ feature }) => {

    const { company_logo, job_title, company_name, remote_or_onsite, location, address, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = feature
    return (
        <div>
            <div className="card w-full h-96 bg-base-100 shadow-xl m-3 ">
                <figure><img className='w-32' src={company_logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-6 font-bold text-zinc-600 text-2xl">
                        {job_title}
                    </h2>
                    <h4 className='mt-2 text-slate-500 text-xl'>{company_name}</h4>
                    <div className='mt-5'>
                        <span className='border-2 px-3 py-2 me-2 text-sky-600 font-semibold rounded-md'>{remote_or_onsite}</span>
                        <span className='border-2 px-3 py-2 text-sky-600 font-semibold rounded-md'>{fulltime_or_parttime}</span>
                    </div>
                    <div className='flex mt-5 items-center'>
                        <div className='flex me-5 justify-between items-center'>
                            <img className='me-1' src={locationIcon} alt="locationIcon" />
                            <p className='text-slate-500'>{location}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <img className='me-1' src={salaryIcon} alt="salaryIcon" />
                            <p className='text-slate-500'>Salary : {salary}</p>
                        </div>
                    </div>
                    <button className='btn-all px-4 py-2 md:px-4 md:py-2 mt-3'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;