import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import DeveloperTerminal from './components/sections/DeveloperTerminal';
import Contact from './components/sections/Contact';
import ProjectDetails from './pages/ProjectDetails';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background selection:bg-primary/30">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Achievements />
              <Education />
              <DeveloperTerminal />
              <Contact />
            </main>
          } />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
