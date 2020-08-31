import React from 'react';
import './App.css';

 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AboutContent from './components/AboutContent'; 
import Funfact from './components/Funfact';
import WorkProcess from './components/WorkProcess';



const App = () => {
  return(
  
      <>
        <AboutContent /> 
        <Funfact />
        <WorkProcess />
      </> 

  );
};

export default App;
