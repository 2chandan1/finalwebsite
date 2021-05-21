import React from 'react';
import web from '../src/images/homem.svg';
// import {NavLink} from 'react-router-dom';
import Common from './Common';
const Home = () => {
    return (
       <>
        <Common  name="Grow Your Business with"
        imgsrc={web}
        visit="/Service"
        btname="Get Started"/>
       </>

    )
}

export default Home
