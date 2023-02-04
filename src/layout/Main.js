import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer/Footer';
import Navbar from '../share/Navbar/Navbar';
import Topbar from '../share/Topbar/Topbar';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>

            <Navbar></Navbar>
            <Topbar></Topbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;