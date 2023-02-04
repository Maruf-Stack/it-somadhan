import React from 'react';
import About from '../about/About';
import Courses from '../courses/Courses';
import Hosting from '../hosting/Hosting';
import Slider from '../slider/Slider';
import Service from './../service/Service';

const Home = () => {
    return (
        <div className='' style={{marginTop:'90px'}}>
            <Slider></Slider>
            <Courses></Courses>
            <About></About>
            <Hosting></Hosting>
            <Service></Service>
        </div>
    );
};

export default Home;