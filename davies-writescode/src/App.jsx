import React from 'react';
import Header from './components/Header'; 
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <div>
      <Header /> 
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
