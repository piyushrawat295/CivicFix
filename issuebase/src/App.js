import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import Navbar from './Components/Navbar/Navbar';
import IssueCreation from './Components/CreateIssue/creation'; 


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-issue" element={<IssueCreation />} />
      </Routes>
    </Router>
  );
};

export default App;
