"use client"
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";

const TimeLine = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      console.log("Closing the menu");
    } else {
      console.log("Opening the menu");
    }
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="timeline">
         <button onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Timeline'}
      </button>
              <ul className={`menu ${isOpen ? 'openMenu' : ''}`}>
        {projects
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((project) => (
            <li key={project._id} onClick={toggleMenu}>
              <Link href={`#${project.slug}` }>{project.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TimeLine;