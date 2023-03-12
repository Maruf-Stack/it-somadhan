import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { Fade } from "react-reveal";
import "./contact.css";
function Contact() {
  return (
    <div className="mt-8 lg:mt-20">
      <Fade top cascade>
        <h2 className="text-2xl text-center contact-txt mb-10">Contact Us</h2>
      </Fade>
      <div className="flex mx-8 lg:mx-20">
        <Fade>
          <div className="address">
            <div className="flex items-center gap-3 mb-3">
              <MdLocationPin className="contact-icon"></MdLocationPin>
              <div>
                <p className="contact-title">Our Location</p>
                <p className="contact-info">Shafipur,Gazipur,Dhaka</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FiPhoneCall className="contact-icon"></FiPhoneCall>
              <div>
                <p className="contact-title">Phone</p>
                <p className="contact-info">(+880)1780527702</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineEmail className="contact-icon"></MdOutlineEmail>
              <div>
                <p className="contact-title">Email</p>
                <p className="contact-info">maruf@gmail.com</p>
              </div>
            </div>
          </div>
        </Fade>
        <div className="contact-form"></div>
      </div>
    </div>
  );
}

export default Contact;
