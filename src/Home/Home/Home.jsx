import React from 'react';
import Banner from '../../components/Banner/Banner';
import Demo from '../../components/Demo/Demo';
import OurDoctor from '../OurDoctor/OurDoctor';
import OurSpecialist from '../OurSpecialist/OurSpecialist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurDoctor></OurDoctor>
            <OurSpecialist></OurSpecialist>
        </div>
    );
};

export default Home;