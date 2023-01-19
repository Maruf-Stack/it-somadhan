import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { SiTwitter } from 'react-icons/si'
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='w-full h-10 bg-blue-400 flex items-center justify-evenly text-sm' style={{ color: '#e8eaf6' }}>
            <div className='flex items-center '>
                <div className='flex items-center mr-5'>
                    <AiTwotonePhone className='mr-1'></AiTwotonePhone>
                    <span>(+880)1780527702</span>
                </div>
                <div className='flex items-center'>
                    <CgMail className='mr-1'></CgMail>
                    <span>maruf@gmail.com</span>
                </div>
            </div>
            <div className='flex items-center'>
                <Link><BsFacebook className='mr-3'></BsFacebook></Link>
                <Link><FiInstagram className='mr-3'></FiInstagram></Link>
                <Link><SiTwitter></SiTwitter></Link>
            </div>

        </div>
    );
};

export default Topbar;