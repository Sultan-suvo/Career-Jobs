import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';

const CategoryLists = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(categories => setCategories(categories))
    }, [])

    return (
        <div className='mt-24  px-12 md:px-40 '>
            <div className='text-center'>
                <h1 className=' text-5xl font-bold mb-4'>Job Category List</h1>
                <p className='text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
                {
                    categories.map(category => <CategoryList
                        key={category.id}
                        category={category}
                    ></CategoryList>)
                }
            </div>
            
        </div>
    );
};

export default CategoryLists;