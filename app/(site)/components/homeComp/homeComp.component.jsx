"use client";

import { useEffect, useState } from 'react';
import ProjectsAfterToday from '../projectsAfterToday/projectsAfterToday.component';
import ProjectsBeforeToday from '../projectsBeforeToday/projectsBeforeToday.component';
import Landing from '../landing/landing.component';

const HomeComp = ({ settings, projects }) => {
  const [currentComponent, setCurrentComponent] = useState<'landing' | 'projectsAfterToday' | 'projectsBeforeToday'>('landing');

  useEffect(() => {
    const handleScroll = (event) => {
      if (currentComponent === 'landing') {
        if (event.deltaY < 0) {
          setCurrentComponent('projectsAfterToday');
        } else if (event.deltaY > 0) {
          setCurrentComponent('projectsBeforeToday');
        }
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentComponent]);

  return (
    <>
      {currentComponent === 'landing' && <Landing settings={settings} />}
      {currentComponent === 'projectsAfterToday' && <ProjectsAfterToday projects={projects} />}
      {currentComponent === 'projectsBeforeToday' && <ProjectsBeforeToday projects={projects} />}
    </>
  );
}

export default HomeComp;
