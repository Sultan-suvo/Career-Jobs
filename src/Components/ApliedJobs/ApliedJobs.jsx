import React from 'react';

const ApliedJobs = () => {
    const jobApplication = JSON.parse(localStorage.getItem('jobApplication'));
    console.log(jobApplication);
    return (
        <div>
            <p>Job Title: {jobApplication.job_title}</p>
            <p>Salary: {jobApplication.salary}</p>
            <p>Phone: {jobApplication.phone}</p>
            <p>Email: {jobApplication.email}</p>
            <p>Address: {jobApplication.address}</p>
        </div>
    );
};

export default ApliedJobs;