import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import AboutMe from './Components/AboutMe';
import RenderProvider from './Contexts/RenderContext';

function App() {
  return (
    <div className="App">
      <RenderProvider>
        <Navigation />
        <AboutMe />
      </RenderProvider>  
    </div>
  );
}

export default App;
