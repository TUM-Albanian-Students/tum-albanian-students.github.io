import React from 'react';
import { Hero } from '../components/Hero';
import { EventsSection } from '../components/EventsSection';
import { DiscoverProjects } from '../components/DiscoverProjects';
import { Team } from '../components/Team';

export const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <div id="events">
        <EventsSection />
      </div>
      <div id="projects">
        <DiscoverProjects />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  );
};