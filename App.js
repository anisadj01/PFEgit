import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar présent sur toutes les pages */}
        <Sidebar />
        
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
