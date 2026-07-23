import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Resume from './components/resume';
import Main from './components/main';
import Contact from './components/contact';
import Navbar from './components/Navbar';
import Projects from './components/projects';
import ProjectDetail from './components/ProjectDetail';
import Experience from './components/Experience';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="App">
        <Navbar />  {/* Navbar always visible */}
        <div className="content">  {/* Prevents navbar overlap */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/about" element={<Resume />} />
            <Route path="/resume" element={<Navigate to="/about" replace />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
