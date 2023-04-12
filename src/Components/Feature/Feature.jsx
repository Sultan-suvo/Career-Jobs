import React, { useState } from 'react';
import locationIcon from '../../assets/Icons/Frame-4.png'
import salaryIcon from '../../assets/Icons/Frame.png'
import { Link } from 'react-router-dom';


const Feature = ({ feature, handleViewDetails }) => {

    const { company_logo, job_title, company_name, remote_or_onsite, location,id, address, fulltime_or_parttime, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = feature
    return (
        <div className='relative'>
            <div className="card w-full h-96 bg-base-100 shadow-xl m-3 ">
                <figure><img className='w-32' src={company_logo} alt="Company_logo" /></figure>
                <div className="card-body ">
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

                    <Link to={`/jobdetails/${id}`}>
                        <button
                            onClick={() => {
                                handleViewDetails(feature);
                            }}
                            className="px-4 py-2.5 flex justify-center items-center font-bold text-base rounded-[4px] text-white bg-gradient-to-r from-blue-400 to-purple-600 absolute bottom-0 mb-5"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Feature;