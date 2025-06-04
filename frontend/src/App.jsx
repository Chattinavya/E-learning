import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar';
import HeroCarousel from './Components/HeroCarousel';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Pages/Dashboard';
import Pdfs from './Components/Pdfs';
import MultiEditor from './Components/Editor';
import Courses from './Components/Courses';
import CourseModules from './Components/CourseModules';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';
import CourseDetails from './Components/CourseDetails';
import TimeComplexity from './Components/TimeComplexity';
import CardSection from './Components/CardSection'; 
import Videos from './Components/Videos'; 
import Interview from './Components/Interview';
import InterviewDetails from './Components/InterviewDetails';
import Quiz from './Components/Quiz';
import Verbal from './Components/Verbal';
import ReasoningModules from './Components/Reasoning';
import WebDevelopment from './Pages/WebDevelopment';

import Java from './Pages/Java';


const AppContent = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const showLanding = location.pathname === '/';
  const hideSidebarPaths = ['/login', '/register'];
  const hideSidebar = hideSidebarPaths.some(path => location.pathname.startsWith(path));

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      {showLanding ? (
        <>
          <Navbar />
          <div style={{ paddingTop: '80px' }}>
            <HeroCarousel />
            <CardSection /> 
          </div>
        </>
      ) : (
        <>
          {!hideSidebar && <TopBar toggleSidebar={toggleSidebar} />}
          {!hideSidebar && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

          <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseModules />} />
              <Route path="/videos" element={<Videos />} /> 
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/interview" element={<Interview />} />
              <Route path="/interview/:id" element={<InterviewDetails />} />
              <Route path="/editor" element={<MultiEditor />} />
              <Route path="/pdfs" element={<Pdfs />} />
              <Route path="/course/coursedetails" element={<CourseDetails />} />
              <Route path="/course/timecomplexity" element={<TimeComplexity />} />
              <Route path="/courses/verbal/*" element={<Verbal />} />
              <Route path="/courses/reasoning-aptitude" element={<ReasoningModules/>} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/java" element={<Java/>} />


            </Routes>
          </div>
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
