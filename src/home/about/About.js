import React from 'react';
import { Fade } from 'react-reveal';
import './about.css';

const About = () => {
    return (
        <div className="grid grid-cols-1 gap-5 mx-10 mt-24 lg:grid-cols-2">
            <Fade>
                <div className="flex flex-col justify-center">
                    <h2 className="mx-auto mb-3 about-us">About us</h2>
                    <div className="about-txt">
                        Welcome to our IT Institute! We are dedicated to
                        providing top-quality education and training in the
                        field of Information Technology. Our mission is to help
                        our students develop the skills and knowledge they need
                        to succeed in the ever-changing world of technology. Our
                        team of experienced instructors is passionate about
                        teaching and committed to helping each student reach
                        their full potential. We offer a wide range of courses,
                        from beginner-level programming to advanced
                        cybersecurity, so that students can tailor their
                        education to their specific interests and career goals.
                        At our institute, we believe in a hands-on, practical
                        approach to learning. Our classrooms are equipped with
                        the latest technology, and our students have access to a
                        range of resources and tools to help them succeed,
                        including online tutorials, practice labs, and
                        industry-standard software.
                    </div>
                </div>
                <div>
                    <img
                        src="https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?w=996&t=st=1674144436~exp=1674145036~hmac=651f90b638ce157abfe06ad095d0e3c64f54b1080d99d6453c488f1e3bffa84a"
                        alt="about"
                        className="ml-0 about-img lg:ml-24"
                    />
                </div>
            </Fade>
        </div>
    );
};

export default About;
