import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import TechnologyPage from './pages/TechnologyPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-blue-950 text-white overflow-hidden">
        <div className="circuit-overlay"></div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;