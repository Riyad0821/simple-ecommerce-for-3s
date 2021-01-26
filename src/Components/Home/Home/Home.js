import React from 'react';
import Navbar from '../../Navbar/Navbar';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <FeaturedProducts />
        </div>
    );
};

export default Home;