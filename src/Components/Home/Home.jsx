import React from 'react';
import CategoryLists from '../CategoryLists/CategoryLists';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CategoryLists></CategoryLists>
            <Features></Features>       
        </div>
    );
};

export default Home;