import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Indicadores from './pages/Indicadores';
import MapaTatico from './pages/Mapatatico';



function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }; 

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        <main 
          style={{ 
            flexGrow: 1,
            transition: 'margin-left 0.3s ease-in-out',
            padding: '0px',
            overflowY: 'auto',
            height: '100vh',
            minWidth: '0px',
          }}
        >
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Indicadores" element={<Indicadores />} />
            <Route path="/Mapatatico" element={<MapaTatico />} />

          </Routes>
        </main>
      </div>
    </Router>
)}
export default App;
