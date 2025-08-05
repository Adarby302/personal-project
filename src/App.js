import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Exp from './Exp';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem('darkMode', String(!prev));
      return !prev;
    });
  };

  return (
    <Router basename="/personal-project">
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <button
          onClick={toggleDarkMode}
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            zIndex: 1000,
            fontSize: 24,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </button>

        <NavBar />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/exp" element={<Exp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
