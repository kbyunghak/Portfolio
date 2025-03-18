import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Resume from './components/resume';
import Main from './components/main';
import Contact from './components/contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar always visible */}
        <div className="content">  {/* Prevents navbar overlap */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;