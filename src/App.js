import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Resume from './components/resume';
import Main from './components/main';
import Contact from './components/contact';
import Navbar from './components/Navbar';
import Projects from './components/projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar always visible */}
        <div className="content">  {/* Prevents navbar overlap */}
          <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/Portfolio" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;