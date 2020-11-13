import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Sidebar from './Sidebar/Sidebar';
const App=()=> {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Sidebar></Sidebar>
        <Hero></Hero>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
