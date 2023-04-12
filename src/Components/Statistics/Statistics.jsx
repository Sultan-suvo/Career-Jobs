import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
            id: 1,
            name: 'New Year',
            marks: 60,
        },
        {
            id: 2,
            name: 'G3architects',
            marks: 59,
        },
        {
            id: 3,
            name: 'Justice',
            marks: 60,
        },
        {
            id: 4,
            name: 'Core JS',
            marks: 56,
        },
        {
            id: 5,
            name: 'Geomitry Ginues',
            marks: 58,
        },
        {
            id: 6,
            name: 'AI Universe Hub',
            marks: 54,
        },
        {
            id: 7,
            name: 'Debugging',
            marks: 60
        },
    ];
    return (

        <div className=''>
            <h1 className='mb-12 text-center text-4xl text-sky-600'>AreaChart</h1>
            <h1 className='mb-12 text-center text-4xl text-sky-600 underline'>Assignment Marks</h1>
            <AreaChart
                width={1200}
                height={360}
                data={data}
            >
                <Area  dataKey="marks"></Area>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
        </div>
    
    );
}


export default Statistics;