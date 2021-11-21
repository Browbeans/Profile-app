import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import AboutMe from './Components/AboutMe';
import RenderProvider from './Contexts/RenderContext';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <RenderProvider>
        <Main/>
      </RenderProvider>  
    </div>
  );
}

export default App;
