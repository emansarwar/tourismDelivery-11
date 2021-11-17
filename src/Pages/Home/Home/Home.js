import React from 'react';

import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import NextTrip from '../NextTrip/NextTrip';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            
            <NextTrip></NextTrip>
            <Footer></Footer>
        </div>
    );
};

export default Home;