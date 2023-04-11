import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import JobDetailsData from '../JobDetailsData/JobDetailsData';

const JobDetails = () => {
    const { id } = useParams();
    const features = useLoaderData();
    const data = features.find((feature) => feature.id === parseInt(id))
    return (
        <div>
            <div className="my-32">{<JobDetailsData data={data} />}</div>
        </div>
    );
};

export default JobDetails;