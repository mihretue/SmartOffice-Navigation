import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './pages/Navigation'
const Home = () => <div><h1>Home Page</h1></div>;
const About = () => <div><h1>About Page</h1></div>;
const Services = () => <div><h1>Services Page</h1></div>;
const Contact = () => <div><h1>Contact Page</h1></div>;

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar component */}
      
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App
