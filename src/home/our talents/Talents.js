import React from "react";
import { Fade } from "react-reveal";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import arif from "../../assets/team/arif.jpg";
import maruf from "../../assets/team/maruf.jpg";
import mohsin from "../../assets/team/mohsin.jpeg";
import mosana from "../../assets/team/mosana.jpeg";
import pranto from "../../assets/team/pranto.jpg";
import romen from "../../assets/team/romen.jpg";
import "./Talents.css";
function Talents() {
  return (
    <div className="mt-8 lg:mt-20">
      <Fade top cascade>
        <h2 className="text-center team">Our Team</h2>
        <p className="text-center team-details">
          You can relay on our amazing features list and also our customer
          services will be<br></br> great experience for you without doubt and
          in no-time
        </p>
      </Fade>
      <Fade>
        <div className="grid lg:grid-cols-4 lg:mx-40 mt-10 mx-5 grid-cols-2 gap-7">
          <div className="single-member flex flex-col items-center gap-5">
            <img src={arif} alt="maruf" className="member-img"></img>
            <div className="flex flex-col items-center">
              <p className="member-name">MD.Ariful Islam</p>
              <p className="member-title">Software Engenieer</p>
            </div>
          </div>
          <div className="single-member flex flex-col items-center gap-5">
            <img src={maruf} alt="maruf" className="member-img"></img>
            <div className="flex flex-col items-center">
              <p className="member-name">MD.Maruf Hasan</p>
              <p className="member-title ">MERN Stack web developer</p>
              <a
                className="portfolio"
                href="https://maruf1010.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit my Portfolio
              </a>
            </div>
          </div>
          <div className="single-member flex flex-col items-center gap-5">
            <img src={romen} alt="maruf" className="member-img"></img>
            <div className="flex flex-col items-center">
              <p className="member-name">MD.Romen Islam</p>
              <p className="member-title">Content Manager</p>
            </div>
          </div>
          <div className="single-member flex flex-col items-center gap-5">
            <img src={pranto} alt="maruf" className="member-img"></img>
            <div className="flex flex-col items-center">
              <p className="member-name">Mamun Karim Pranto</p>
              <p className="member-title">Digital Marketing Manager</p>
            </div>
          </div>
          <div className="single-member flex flex-col items-center gap-5">
            <img src={mosana} alt="maruf" className="member-img"></img>
            <div className="flex flex-col items-center">
              <p className="member-name">Mosana Binte Mofiz</p>
              <p className="member-title">Technical Consultants</p>
            </div>
          </div>
          <div className="single-member flex flex-col items-center gap-5">
            <img src={mohsin} alt="maruf" className="member-img"></img>
            <div className="flex flex-col items-center">
              <p className="member-name">Mohsin Hossain</p>
              <p className="member-title">Graphics Designer</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Talents;
