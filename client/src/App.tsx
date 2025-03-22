import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import SalvationPage from './pages/SalvationPage/SalvationPage';
import HymnsPage from './pages/HymnsPage/HymnsPage';
import ArmorOfGodPage from './pages/ArmorOfGodPage/ArmorOfGodPage';
import JesusIsGodPage from './pages/JesusIsGodPage/JesusIsGodPage';
import AboutPage from './pages/AboutPage/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/salvation" element={<SalvationPage />} />
            <Route path="/hymns" element={<HymnsPage />} />
            <Route path="/armor-of-god" element={<ArmorOfGodPage />} />
            <Route path="/jesus-is-god" element={<JesusIsGodPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
