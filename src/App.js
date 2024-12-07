import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Fasilitas from './Fasilitas';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
