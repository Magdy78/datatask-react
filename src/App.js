import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register'; 
import DataDisplay from './components/DataDisplay';
import Contact from './components/ContactUs/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ItemDetails from './components/ItemDetails';
import UserSettings from './components/UserSettings/UserSettings';

function App() {
  return (
    
    <Router>
      
      <div className="App">
        <Navbar />
       
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/data" element={<DataDisplay />} />
          <Route path="/userSettings" element={<UserSettings />} />

          <Route path="/details/:id" element={<ItemDetails />} />

        </Routes>
<br/> <br/><br/>

       <Footer />
      </div>
    
    </Router>
    
  );
}

export default App;
