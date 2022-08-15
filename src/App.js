import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import EmployTabel from './component.js/EmployTabel';
import EmployDetails from './component.js/EmployDetail';

function App() {




  return (
    <>
      <Router>
        <Routes>

          <Route exact path="/" element={<EmployTabel />} />
          <Route exact path="/employe/:id" element={<EmployDetails />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
