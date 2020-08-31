import React from 'react'; 

import Slides from './components/Slides';
import AboutContent from './components/AboutContent';
import ServiceContent from './components/ServiceContent';
import Funfact from './components/Funfact';
import WorkProcess from './components/WorkProcess';


const Home = () => { 
  return(
    <div className="home-page">  
        <Slides />
        <AboutContent />
        <ServiceContent /> 
        <Funfact />
        <WorkProcess />
    </div>    
  )
};

export default Home;