import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../share/Navbar/Navbar';
import Topbar from '../share/Topbar/Topbar';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            {/* <Topbar></Topbar> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;