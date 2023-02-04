import React from 'react';
import './hosting.css';
// import Typewriter from 'typewriter-effect';
import Typewriter from 'typewriter-effect';

const Hosting = () => {

    return (
        <div className='my-20'>
            <div className='text-3xl font-bold text-center lg:text-4xl hosting-title'>
                <h1>Best <span className='blue'>hosting</span> and <span className='blue'>domain</span> for your</h1>

                <Typewriter
                    options={{
                        strings: ['Portfolio website.', 'Ecommerce website.', 'Business website.', 'Bloging website.'],
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('')
                            .callFunction(() => {

                            })

                            .deleteAll()
                            .callFunction(() => {

                            })
                            .start();

                    }}
                />
            </div>
            <div className='grid grid-cols-2 gap-4 mx-5 mt-10 lg:gap-0 lg:mt-16 all-hosting lg:grid-cols-3 lg:mx-0'>
                <div className='flex items-center gap-3 mx-auto single-hosting'>
                    <img src="https://img.freepik.com/free-vector/set-technology-elements-server-room-cloud-data-storage-future-data-science-progress_39422-653.jpg?size=626&ext=jpg&ga=GA1.2.1503284893.1652338277&semt=sph" alt="" className='hosting-img' />
                    <div className='hosting-details'>
                        <h3 className='text-xl font-semibold'>SharedHosting</h3>
                        <p>Simple and powerfull hosting for everyone</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 mx-auto single-hosting'>
                    <img src="https://img.freepik.com/free-photo/dynamic-website-hosting-concept_23-2149406768.jpg?size=626&ext=jpg&ga=GA1.1.1503284893.1652338277&semt=sph" alt="" className='hosting-img' />
                    <div className='hosting-details'>
                        <h3 className='text-xl font-semibold'>CloudHosting</h3>
                        <p>For more speed and less downtime</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 mx-auto single-hosting'>
                    <img src="https://storage.needpix.com/rsynced_images/wordpress-3446158_1280.jpg" alt="" className='hosting-img' />
                    <div className='hosting-details'>
                        <h3 className='text-xl font-semibold'>WordpressHosting</h3>
                        <p>For most power and flexibility you need</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hosting;