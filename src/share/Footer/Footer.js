import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => (
  <div className="footer-container">
    <footer className="px-10 pt-20 pb-2 mt-10 text-base-content footer">
      <div className="grid grid-cols-4 justify-items-center">
        <div className="flex flex-col">
          <span className="footer-title">Services</span>
          <div className="flex flex-col mt-2">
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <div className="flex flex-col mt-2">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <div className="flex flex-col mt-2">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Social Links</span>
          <div className="flex gap-3 mt-2 text-2xl social">
            <Link>
              <FaFacebook></FaFacebook>
            </Link>
            <Link>
              <FaInstagram></FaInstagram>
            </Link>
            <Link>
              <GrTwitter></GrTwitter>
            </Link>
          </div>
        </div>
      </div>
    </footer>
    <p className="mt-8 footer-title copyright text-center">
      Copyright © 2023 - All right reserved
    </p>
    <p className="copyright text-center footer-title">Powered by IT SOMADHAN</p>
  </div>
);

export default Footer;
