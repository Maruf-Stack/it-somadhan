import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Courses from "../courses/Courses";
import Top from "../gototop/Top";
import Hosting from "../hosting/Hosting";
import Talents from "../our talents/Talents";
import Slider from "../slider/Slider";
import Service from "./../service/Service";

const Home = () => {
  return (
    <div className="" style={{ marginTop: "90px" }}>
      <Slider></Slider>
      <Courses></Courses>
      <About></About>
      <Hosting></Hosting>
      <Service></Service>
      <Talents></Talents>
      <Contact></Contact>
      <Top></Top>
    </div>
  );
};

export default Home;
