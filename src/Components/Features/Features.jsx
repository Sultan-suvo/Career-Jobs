import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';

const Features = () => {
    const features = useLoaderData();
    console.log(features);
    return (
        <div className='mt-24 px-12 md:px-40 '>
            <div className=' text-center'>
                <h1 className=' text-5xl font-bold mb-4'>Featured Jobs</h1>
                <p className='text-slate-500 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-12'>
                {
                    features.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    >

                    </Feature>)
                }
            </div>
        </div>
    );
};

export default Features;