import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import HeaderContact from '../Shared/HeaderContact/HeaderContact';
import WhatsappButton from '../components/WhatsappButton/WhatsappButton';
import CallMeButton from '../components/CallMeButton/CallMeButton';

const Main = () => {
    return (
        <div>
            <HeaderContact></HeaderContact>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <WhatsappButton></WhatsappButton>
            <CallMeButton></CallMeButton>
        </div>
    );
};

export default Main;