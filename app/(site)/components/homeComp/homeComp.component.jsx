// 'use client';

// import { useEffect, useState } from 'react';
// import ProjectsAfterToday from '../projectsAfterToday/projectsAfterToday.component'
// import Landing from '../landing/landing.component';


// const HomeComponent = ({ settings, projects }) => {
//   const [showProjectsAfterToday, setShowProjectsAfterToday] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition <= 0) {
//         setShowProjectsAfterToday(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//       <>
//       {showProjectsAfterToday && <ProjectsAfterToday projects={projects} />}
//       <Landing settings={settings} />
      
      
//       </>



//   );
// };

// export default HomeComponent;
