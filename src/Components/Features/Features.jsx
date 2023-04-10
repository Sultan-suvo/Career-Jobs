import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Feature from '../Feature/Feature';

const Features = () => {
    const features = useLoaderData();
    console.log(features);
    return (
        <div>
            {
                features.map(feature => <Feature
                key={feature.id}
                feature={feature}
                >

                </Feature>)
            }
        </div>
    );
};

export default Features;