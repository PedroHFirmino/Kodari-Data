import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Indicadores from './pages/Indicadores';



function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }; 

  const contentMarginLeft = isCollapsed ? '80px' : '270px';
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        <main 
          style={{ 
            marginLeft: contentMarginLeft, 
            width: `calc(100% - ${contentMarginLeft})`,
            transition: 'margin-left 0.3s ease-in-out',
            padding: '24px',
            overflowY: 'auto',
            height: '100vh',
          }}
        >
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Indicadores" element={<Indicadores />} />

          </Routes>
        </main>
      </div>
    </Router>
)}
export default App;
