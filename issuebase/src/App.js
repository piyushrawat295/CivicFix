import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SubmitIssue from './Components/CreateIssue/creation.jsx';
import UserDashboard from './Components/Dashboard/Dashboard.jsx';
import PendingIssues from './Components/Issues/PendingIssues/PendingIssues.jsx';
import ProgressIssues from './Components/Issues/ProgressIssues/ProgressIssues.jsx';
import ResolvedIssues from './Components/Issues/ResolvedIssues/ResolvedIssue.jsx'; // Ensure consistent naming convention
import Home from './Components/LandingPage/Home';
import Navbar from './Components/Navbar/Navbar';
import UserProfile from './Components/Profile/UserProfile/UserProfile.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Route for Home */}
        <Route path="/" element={<Home />} />
        
        {/* Dashboard with Nested Routes */}
        <Route path="/userdashboard" element={<UserDashboard />}>
          <Route path="submit-issues" element={<SubmitIssue />} />
          <Route path="pending-issues" element={<PendingIssues />} />
          <Route path="progress-issues" element={<ProgressIssues />} />
          <Route path="resolved-issues" element={<ResolvedIssues />} />
          <Route path="userprofile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
