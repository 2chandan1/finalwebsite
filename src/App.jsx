import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from './Navbar';
import Footer from './Footer';
import {Redirect, Route, Switch} from 'react-router-dom'

const App = () => {
    return (
        <>
        <Navbar/>
     <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/About' component={About}/>
         <Route exact path='/Contact' component={Contact}/>
         <Route exact path='/Service' component={Service}/>
         <Redirect to='/'/>
        
     </Switch>
     <Footer/>
    </>
    )
}

export default App;
