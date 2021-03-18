import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRouter from './Components/MyRouter/MyRouter';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <MyRouter/>
    </BrowserRouter>
  );
}

export default App;
