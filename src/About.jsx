import React from "react";
import web from "../src/images/aboutm.png";
// import {NavLink} from 'react-router-dom';
import Common from "./Common";

const About = () => {
  return (
    <>
    {/* <h1 className="text-center">About Us</h1> */}
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/Contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
