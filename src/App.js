import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register'; 
import DataDisplay from './components/DataDisplay';

function App() {
  return (
    
    <Router>
      
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/data" element={<DataDisplay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
