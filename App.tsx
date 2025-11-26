import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

// Intelligent scrolling component
const ScrollHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Map paths to section IDs on the homepage
    const sectionMap: Record<string, string> = {
      '/events': 'events',
      '/projects': 'projects',
      '/team': 'team',
    };

    const elementId = sectionMap[pathname];

    if (elementId) {
      // If the path corresponds to a section, scroll to it after a brief delay to allow rendering
      // We render HomePage for these routes, so the element should exist
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // For standard pages (Home, About, Contact), scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<HomePage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            <Route path="/team" element={<HomePage />} />
            <Route path="/projects" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;