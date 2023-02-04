import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='grid grid-cols-1 gap-5 mx-10 mt-24 lg:grid-cols-2'>
            <div className='flex flex-col justify-center'>
                <h2 className='mx-auto mb-3 about-us'>About us</h2>
                <div className='about-txt'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus laborum aut laudantium officia doloremque assumenda quibusdam, libero sunt aliquam ratione adipisci officiis fugit illo provident molestias sit sed maxime modi delectus nostrum dolorum quaerat voluptate placeat? Ullam fugiat reiciendis ducimus exercitationem nam quidem quibusdam vitae optio nisi porro. Possimus aperiam perferendis ut soluta rem ullam sunt! Fugit soluta impedit explicabo, consequatur doloremque velit, dolore eos veritatis nulla, placeat at unde?
                </div>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?w=996&t=st=1674144436~exp=1674145036~hmac=651f90b638ce157abfe06ad095d0e3c64f54b1080d99d6453c488f1e3bffa84a" alt="about" className='ml-0 about-img lg:ml-24' />
            </div>
        </div>
    );
};

export default About;