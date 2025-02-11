import React from 'react';
import Banner from '../Components/Banner';
import RecentlyLostItems from '../Components/RecentlyLostItems';
import Categories from '../Components/Categories';
import Statistics from '../Components/Statistics';
import LatestFindAndLostItems from '../Components/LatestFindAndLostItems';
import AboutUs from '../Components/AboutUs';

const Home = () => {
    return (
        <div className='bg-orange-50'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <LatestFindAndLostItems></LatestFindAndLostItems>
            <RecentlyLostItems></RecentlyLostItems>
            <Categories></Categories>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;