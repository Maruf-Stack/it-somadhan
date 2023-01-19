import { Typography } from '@mui/material';
import React from 'react';
import Courses from '../courses/Courses';
import Slider from '../slider/Slider';

const Home = () => {
    return (
        <div className='mt-24'>
            <Slider></Slider>
            <Courses></Courses>
        </div>
    );
};

export default Home;