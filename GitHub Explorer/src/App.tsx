import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'


import { MainContentStyles } from '../src/styles/globalStyle'


function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <MainContentStyles />
    </>
  );
}

export default App;
