import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [jobApplication, setJobApplication] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('jobApplication'));
        setJobApplication(data);
    }, []);

    if (!jobApplication) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <div className='py-20'>
                <h1 className=' text-center text-4xl text-sky-600'>Applied jobs</h1>
            </div>
            <div className='px-12 md:mx-40 bg-slate-100 p-4 rounded-md flex items-center justify-between'>
                <div>
                    <img className='mb-3 w-32' src={jobApplication.company_logo} alt="" />
                </div>
                <div>
                    <p className='mb-3'><span className='font-bold'>Job Title : </span> {jobApplication.job_title}</p>
                    <p className='mb-3'><span className='font-bold'>Job Name : </span> {jobApplication.company_name} </p>
                    <div className='mt-5'>
                        <span className='border-2 px-3 py-2 me-2 bg-white text-sky-600 font-semibold rounded-md'>{jobApplication.remote_or_onsite}</span>
                        <span className='border-2 px-3 py-2 bg-white text-sky-600 font-semibold rounded-md'>{jobApplication.fulltime_or_parttime}</span>
                    </div>
                    <div className='flex mt-4'>
                        <p><span className='font-bold'>Address : </span> {jobApplication.location}</p>
                        <p className='mb-3 ms-4'><span className='font-bold'>Salary : </span> {jobApplication.salary}</p>
                    </div>
                </div>
               <div>
               <Link to={`/jobdetails`}>
                        <button
                            
                            className="px-4 py-2.5 flex justify-center items-center font-bold text-base rounded-[4px] text-white bg-gradient-to-r from-blue-400 to-purple-600 bottom-0 mb-5"
                        >
                            View Details
                        </button>
                    </Link>
               </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
