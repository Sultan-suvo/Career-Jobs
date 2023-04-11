import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetailsData from '../JobDetailsData/JobDetailsData';

const JobDetails = () => {
    const { id } = useParams();
    const features = useLoaderData();
    const data = features.find((feature) => feature.id === parseInt(id))
    return (
        <div>
            <div className='py-12 details-cart'>
            <h1 className='text-4xl  text-center font-bold mb-4'>Job Details</h1>
            </div>
            <div className="mt-4">
                {
                    <JobDetailsData data={data} />
                }
            </div>
        </div>
    );
};

export default JobDetails;