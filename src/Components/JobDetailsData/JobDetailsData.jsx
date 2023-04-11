import React from 'react';
import './JobDetailsData.css'
import salaryIcon from '../../assets/Icons/Frame.png'
import titleIcon from '../../assets/Icons/Frame-1.png'
import phoneIcon from '../../assets/Icons/Frame-2.png'
import emailIcon from '../../assets/Icons/Frame-3.png'
import locationIcon from '../../assets/Icons/Location Icon.png'


const JobDetailsData = ({ data }) => {
    console.log(data);
    const { job_description, job_responsibility, educational_requirements, phone, experiences, salary, job_title, address, email } = data;
    return (
        <div className='md:flex  px-12 md:mx-40'>
            <div className='p-2 md:w-3/4'>
                <p className='mb-5 text-base'><span className='font-bold'>Job Description : </span> {job_description} </p>
                <p className='mb-5'><span className='font-bold'>Job Responsibility :</span> {job_responsibility} </p>
                <p className='mb-5'><span className='font-bold'>Educational Requirements : </span>  {educational_requirements} </p>
                <p className='mb-5'><span className='font-bold'>Expriences : </span>  {experiences} </p>
            </div>

            <div className='details-cart p-3'>
                <h5 className='text-xl font-bold ms-7 my-5'>Job Details </h5>
                <hr />
                <div className='mt-3 text-slate-600 font-bold'>
                    <div className='flex mb-3'>
                        <img className='me-2' src={salaryIcon} alt="" />
                        <p>Salary : {salary}</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='me-2 h-6' src={titleIcon} alt="" />
                        <p>Job Title : {job_title}</p>
                    </div>
                </div>
                <hr />
                <div className='mt-3 text-slate-600 font-bold'>
                    <div className='flex mb-3'>
                        <img className='me-2  h-6' src={phoneIcon} alt="" />
                        <p>Phone : {phone}</p>
                    </div>
                    <div className='flex mb-3'>
                        <img className='me-2  h-6' src={emailIcon} alt="" />
                        <p>Email : {email}</p>
                    </div>
                    <div className='flex mb-3'>
                        <img className='me-2 text-slate-500  h-6' src={locationIcon} alt="" />
                        <p>Address : {address}</p>
                    </div>
                </div>
                <div>
                    <button className='btn-all w-full px-4 py-2 md:px-4 md:py-2'>Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetailsData;