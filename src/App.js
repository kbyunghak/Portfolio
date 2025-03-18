import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Resume from './components/resume';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </Router>
        {/* <Resume /> */}
      </header>
    </div>
  //   <Router>
  //     <div className="App">
  //       <header className="App-header">
  //         <Link to="./resume" className="App-link">Go to Resume</Link>
  //         <Resume />
  //       </header>

  //       <Routes>
  //         <Route path="/resume" element={<Resume />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
  );
}

export default App;